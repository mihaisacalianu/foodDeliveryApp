import React from 'react'

function Cart() {
  return (
    <dialog open className='cart'>
      <h2>Your Cart</h2>
      <ul>
        <li className='cart-item'>
          <p>Caesar Salad - 2 x £9.99</p>
          <div className="cart-item-actions">
          <button>-</button>
          <p>2</p>
          <button>+</button>
          </div>
        </li>
      </ul>
      <h3 className='cart-total'>£20</h3>
      <div className="modal-actions">
        <form method="dialog">
          <button><p className="text-button">Close</p></button>
        </form>
        <button><p className="text-button">Go to Checkout</p></button>
      </div>

    </dialog>
  )
}

export default Cart
