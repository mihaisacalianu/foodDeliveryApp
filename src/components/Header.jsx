import { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Image from './Image'
import CartContext from './states'

function Header({handleCartClick}) {

  const cartItems = useContext(CartContext);
  console.log(cartItems[0].items);
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt="logo-image"/>
        <h1>Food To Go</h1>
      </div>
      <nav>
        <button className="text-button" onClick={handleCartClick}>Cart({cartItems[0].items.length > 0 ? cartItems[0].items.length : 0})</button>
      </nav>
    </header>
  )
}

export default Header
