import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { productType } from "../types";

type MenuContextData = {
  openCart: boolean;
  CartItems: Array<productType>;
  totalItems: number;
  totalValueCart: string;
  isCreatingCheckoutSession: boolean;
  toggleShopCart: () => void;
  addItem: (product) => void;
  removeProductToCart: (id) => void;
  handleCheckoutButton: (products) => void;
  clearCartItems: () => void;
};

export const MenuContext = createContext({} as MenuContextData);

type ShopCartContextProp = {
  children: ReactNode;
};

export function ShopCartContext({ children }: ShopCartContextProp) {
  const [openCart, setOpenCart] = useState(false);
  const [CartItems, setCartItems] = useState([]);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart_items"));
    if (items) {
      setCartItems(items);
    }
  }, []);

  function addItem(product) {
    const copyProductsCart = [...CartItems];

    const itemExist = copyProductsCart.find((item) => item.id === product.id);

    if (!itemExist) {
      product.quantity = 1;
      setCartItems((CartItems) => [...CartItems, product]);
    } else {
      itemExist.quantity = itemExist.quantity + 1;
      setCartItems((CartItems) => [...CartItems]);
    }
    localStorage.setItem("cart_items", JSON.stringify(CartItems));
  }

  function removeProductToCart(id) {
    const copyProductsCart = [...CartItems];

    const itemExist = copyProductsCart.find((item) => item.id === id);

    if (itemExist.quantity > 1) {
      itemExist.quantity = itemExist.quantity - 1;
      setCartItems((CartItems) => [...CartItems]);
    } else {
      const arrayFilter = copyProductsCart.filter(
        (Product) => Product.id !== id
      );

      setCartItems(arrayFilter);
    }
    localStorage.setItem("cart_items", JSON.stringify(CartItems));
  }

  const totalItems = CartItems.map((item) => Number(item.quantity)).reduce(
    (prev, curr) => prev + curr,
    0
  );

  const totalValueCart = CartItems.reduce(getTotal, 0);
  function getTotal(total, item) {
    const pricing = item.price;

    return total + pricing * item.quantity;
  }

  function clearCartItems() {
    localStorage.setItem("cart_items", JSON.stringify([]));
  }

  function toggleShopCart() {
    setOpenCart(!openCart);
  }

  async function handleCheckoutButton(products) {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <MenuContext.Provider
      value={{
        CartItems,
        openCart,
        toggleShopCart,
        totalValueCart,
        addItem,
        removeProductToCart,
        totalItems,
        isCreatingCheckoutSession,
        handleCheckoutButton,
        clearCartItems,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export const useShopCart = () => {
  return useContext(MenuContext);
};
