import React from 'react'
import logo from '../assets/logo.jpg'
import Image from './Image'

function Header({handleCartClick}) {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt="logo-image"/>
        <h1>Food To Go</h1>
      </div>
      <nav>
        <button onClick={handleCartClick}>Cart(0)</button>
      </nav>
    </header>
  )
}

export default Header
