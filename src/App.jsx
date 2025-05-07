import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import Cart from "./components/Cart.jsx";
import { useContext, useState } from "react";
import  CartContext from "./components/states.jsx"

function App() {

  const [cartShow, setCartShow] = useState(false);
  const [cartItems, setCartItems] = useState(
    {items:[],
    toPay: 0}
  );


  function handleCartClick(){
    setCartShow((prev)=> !prev);
  }
  function handleCartCloseBtn(){
    setCartShow(false);
  }
  function handleFormCloseBtn(){
    setCartShow(false);
  }

  return (
    <>
      <CartContext.Provider value={[cartItems,setCartItems]}>
        <Header handleCartClick={handleCartClick}/>
        <Meals />
        <Cart
        showCart={cartShow}
        handleCartCloseBtn={handleCartCloseBtn}
        handleFormCloseBtn={handleFormCloseBtn}
        />
      </CartContext.Provider>
    </>
  );
}

export default App;
