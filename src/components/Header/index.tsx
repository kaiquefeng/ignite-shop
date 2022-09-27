import Image from "next/future/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import { useShopCart } from "../../context/ShopCart";
import { Cart } from "../Cart";
import { CartIcon, HeaderContainer } from "./styles";

export function Header() {
  const { openCart, toggleShopCart } = useShopCart();

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <CartIcon onClick={() => toggleShopCart()}>
        <FiShoppingBag />
      </CartIcon>
      {openCart && <Cart />}
    </HeaderContainer>
  );
}
