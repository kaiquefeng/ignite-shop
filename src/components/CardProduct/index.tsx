import Image from "next/future/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { CartIconProduct, DetailSmall, Product } from "./styles";

interface productProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  };
}

export function CardProduct({ product }: productProps) {
  return (
    <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
      <Product className="keen-slider__slide">
        <Image src={product.imageUrl} width={520} height={480} alt="" />

        <footer>
          <DetailSmall>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </DetailSmall>
          <CartIconProduct onClick={() => console.log("Add to cart product")}>
            <FiShoppingBag />
          </CartIconProduct>
        </footer>
      </Product>
    </Link>
  );
}
