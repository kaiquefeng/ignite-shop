import { useShopCart } from "../../context/ShopCart";
import { Button } from "../base/Button";
import { ItemCart } from "../ItemCart";
import {
  CartContainer,
  IconClose,
  ItemsCart,
  LineTotal,
  TotalContainer,
  ValueTotal,
} from "./styles";

export function Cart() {
  const { toggleShopCart } = useShopCart();
  return (
    <CartContainer>
      <header>
        <IconClose onClick={() => toggleShopCart()}>+</IconClose>
      </header>

      <main>
        <strong>Sacola de compras</strong>
        <ItemsCart>
          <ItemCart />
          <ItemCart />
          <ItemCart />
        </ItemsCart>
      </main>

      <footer>
        <TotalContainer>
          <LineTotal>
            <p>Quantidade</p>
            <span>3 itens</span>
          </LineTotal>
          <LineTotal>
            <strong>Valor total</strong>
            <ValueTotal>R$ 270,00</ValueTotal>
          </LineTotal>
        </TotalContainer>
        <Button>Finalizar compra</Button>
      </footer>
    </CartContainer>
  );
}
