import { useShopCart } from "../../context/ShopCart";
import { formatMoney } from "../../lib/format";
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
  const { toggleShopCart, CartItems, totalItems, totalValueCart } =
    useShopCart();

  console.log(CartItems);
  return (
    <CartContainer>
      <header>
        <IconClose onClick={() => toggleShopCart()}>+</IconClose>
      </header>

      <main>
        <strong>Sacola de compras</strong>
        <ItemsCart>
          {CartItems.map((item) => (
            <ItemCart key={item.id} product={item} />
          ))}
        </ItemsCart>
      </main>

      <footer>
        <TotalContainer>
          <LineTotal>
            <p>Quantidade</p>
            <span>{totalItems} itens</span>
          </LineTotal>
          <LineTotal>
            <strong>Valor total</strong>
            <ValueTotal>{formatMoney(totalValueCart)}</ValueTotal>
          </LineTotal>
        </TotalContainer>
        <Button>Finalizar compra</Button>
      </footer>
    </CartContainer>
  );
}
