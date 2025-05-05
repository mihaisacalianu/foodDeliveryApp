import {useRef, useContext} from 'react';
import CartContext from './states.jsx'

function Cart({showCart,handleCartCloseBtn}) {
  const dialog = useRef();
  const [cartItems,setCartItems] = useContext(CartContext);

  console.log(cartItems);
  function handlePlus(index) {
    setCartItems(cartItems.map((item)=> {return {...item, quantity: item.quantity + 1}}))
  }

  function handleMinus(){

    setCartItems(cartItems.map((item)=> {
      return {...item, quantity: item.quantity - 1}}))
  }

  // shows the cart modal when clicked
  showCart ? dialog.current.showModal() : null;


   return (
    <dialog  ref={dialog} className='cart'>
      {cartItems.length > 0 ? (<><h2>Your Cart</h2>
      <ul>
        {cartItems.map((item,index)=>{
        return(
          <li key={item.id}
          className='cart-item'>
            <p>{item.name}-{item.quantity} x £{item.price} </p>
            <div className="cart-item-actions">
            <button onClick={handleMinus}>-</button>
            <p>{item.quantity}</p>
            <button onClick={()=>handlePlus(index)}>+</button>
            </div>
          </li>
            )
        })
        }
        </ul>
      <h3 className='cart-total'>£{cartItems.quantity * cartItems.price}</h3>
      <div className="modal-actions">
        <form method="dialog">
          <button onClick={handleCartCloseBtn}><p className="text-button">Close</p></button>
        </form>
        <button><p className="text-button">Go to Checkout</p></button>
      </div> </>) : (<>
          <form method="dialog">
          <button onClick={handleCartCloseBtn}><p className="text-button">Close</p></button>
        </form>
        <p>No items in cart!</p>
        </>)
      }

    </dialog>
  )
}

export default Cart
