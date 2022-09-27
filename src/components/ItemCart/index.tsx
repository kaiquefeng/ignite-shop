import Image from "next/future/image";
import { useShopCart } from "../../context/ShopCart";
import { formatMoney } from "../../lib/format";
import { productType } from "../../types";
import {
  BulletQuantity,
  DetailProduct,
  ImageContainer,
  ItemCartContainer,
} from "./styles";

interface ProductProps {
  product: productType;
}

export function ItemCart({ product }: ProductProps) {
  const { removeProductToCart } = useShopCart();

  return (
    <ItemCartContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={101} height={93} alt="" />
        <BulletQuantity>{product.quantity}</BulletQuantity>
      </ImageContainer>

      <DetailProduct>
        <span>{product.name}</span>
        <strong>{formatMoney(product.price)}</strong>
        <p onClick={() => removeProductToCart(product.id)}>Remover</p>
      </DetailProduct>
    </ItemCartContainer>
  );
}
