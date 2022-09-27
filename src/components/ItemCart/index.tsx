import Image from "next/future/image";
import camisa from "../../assets/camisa.webp";
import { DetailProduct, ImageContainer, ItemCartContainer } from "./styles";

export function ItemCart() {
  return (
    <ItemCartContainer>
      <ImageContainer>
        <Image src={camisa} width={101} height={93} alt="" />
      </ImageContainer>

      <DetailProduct>
        <span>Camiseta Beyond the Limits</span>
        <strong>R$ 79,90</strong>
        <p>Remover</p>
      </DetailProduct>
    </ItemCartContainer>
  );
}
