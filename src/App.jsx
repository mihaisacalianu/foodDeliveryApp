import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import Cart from "./components/Cart.jsx";
import { useState } from "react";

function App() {

  const [cartShow, setCartShow] = useState(false);

  function handleCartClick(){
    setCartShow((prev)=>!prev);
  }

  function handleCartCloseBtn(){
    setCartShow(false);
  }

  return (
    <>
      <Header handleCartClick={handleCartClick}/>
      <Meals />
      <Cart
      showCart={cartShow}
      handleCartCloseBtn={handleCartCloseBtn}
      />
    </>
  );
}

export default App;
