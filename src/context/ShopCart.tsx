import { createContext, ReactNode, useContext, useState } from "react";

type MenuContextData = {
  openCart: boolean;
  toggleShopCart: () => void;
};

export const MenuContext = createContext({} as MenuContextData);

type ShopCartContextProp = {
  children: ReactNode;
};

export function ShopCartContext({ children }: ShopCartContextProp) {
  const [openCart, setOpenCart] = useState(false);

  function toggleShopCart() {
    setOpenCart(!openCart);
  }

  return (
    <MenuContext.Provider value={{ openCart, toggleShopCart }}>
      {children}
    </MenuContext.Provider>
  );
}

export const useShopCart = () => {
  return useContext(MenuContext);
};
