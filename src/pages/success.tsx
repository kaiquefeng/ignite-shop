import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShopCart } from "../context/ShopCart";
import { stripe } from "../lib/stripe";
import {
  ContainerImages,
  ImageContainer,
  SuccessContainer,
} from "../styles/pages/success";

interface SuccessProps {
  costumerName: string;
  quantity: number;
  session: any;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({
  costumerName,
  products,
  quantity,
  session,
}: SuccessProps) {
  const { clearCartItems } = useShopCart();

  useEffect(() => {
    if (session) {
      clearCartItems();
    }
  }, []);

  return (
    <SuccessContainer>
      <ContainerImages>
        {products.map((item, index) => (
          <ImageContainer key={item[0]} style={{ zIndex: index }}>
            <Image src={item[0] as string} width={120} height={110} alt="" />
          </ImageContainer>
        ))}
      </ContainerImages>

      <h1>Compra efetuada</h1>

      <p>
        Uhuul <strong>{costumerName}</strong>, sua compra de {quantity}{" "}
        camisetas já está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data", "line_items.data.price.product"],
  });
  console.log("session::", session);

  const costumerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  const products = session.line_items.data.map(
    (product) => product.price.product
  );

  // @ts-ignore
  const productImages = products.map((item) => item.images);

  return {
    props: {
      costumerName,
      quantity: products.length,
      products: productImages,
      session,
    },
  };
};
