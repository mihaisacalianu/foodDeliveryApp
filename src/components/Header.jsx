import React from 'react'
import logo from '../assets/logo.jpg'
import Image from './Image'

function Header() {
  return (
    <header id='main-header'>
      <div id='title'>
        <h1>Food To Go</h1>
        <img src={logo} alt="logo-image"/>
      </div>
      <button>Cart</button>
    </header>
  )
}

export default Header
