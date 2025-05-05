import { createContext, useContext } from "react";

const CartContext = createContext({
  items: []
});

export default CartContext;
