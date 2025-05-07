import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalToPay: 0
});

export default CartContext;
