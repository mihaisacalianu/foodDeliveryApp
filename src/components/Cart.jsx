import {useRef, useContext, useState, useEffect} from 'react';
import CartContext from './states.jsx'
import OrderFrom from './OrderFrom.jsx';


function Cart({showCart,handleCartCloseBtn, handleFormCloseBtn}) {
  const dialog = useRef();
  const [cartItems,setCartItems] = useContext(CartContext);
  const [priceToPay, setPriceToPay] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(()=>{
    if(cartItems.items.length > 0){
      const price = cartItems.items.reduce((acc,item) => {
        return acc + item.price * item.quantity;
      },0)
      setPriceToPay(price);
    }
  },[cartItems])



  function handlePlus(id) {
    const updatedQuantity = {
      ...cartItems,
      items: cartItems.items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : { ...item }
      ),
      toPay: 0
    };
    setCartItems(updatedQuantity);
  }

  function handleMinus(id){

    const updatedQuantity = {
      ...cartItems,
      items: cartItems.items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : { ...item }
      )
    };

    // find the index of this specific meal
    const index = updatedQuantity.items.findIndex((item) => item.id === id)

    if(updatedQuantity.items[index].quantity < 1){
      setCartItems({ ...cartItems, items: cartItems.items.filter(item =>
          item.id !== id )
      });
    }else{

      setCartItems(updatedQuantity);
    }
  }
  function handleFormCloseBtn() {
    setShowCheckout(false);
  }

  // shows the cart modal when clicked
  showCart ? dialog.current.showModal() : null;

  return (
    <dialog ref={dialog} className='cart'>
      {showCheckout ? <OrderFrom totalPrice={priceToPay} handleFormCloseBtn={handleFormCloseBtn}/> :  <>
      {cartItems.items.length > 0 ? (<><h2>Your Cart</h2>
      <ul>
        {cartItems.items.map((item,index)=>{
        return(
          <li key={item.id}
          className='cart-item'>
            <p>{item.name}-{item.quantity} x £{item.price} </p>
            <div className="cart-item-actions">
            <button onClick={()=>handleMinus(item.id)}>-</button>
            <p>{item.quantity}</p>
            <button onClick={()=>handlePlus(item.id,index)}>+</button>
            </div>
          </li>
            )
        })
        }
        </ul>
      <h3 className='cart-total'>£{priceToPay}</h3>
      <div className="modal-actions">
        <form method="dialog">
          <button onClick={handleCartCloseBtn} className="text-button">Close</button>
        </form>
        <button onClick={()=>setShowCheckout(true)}className="text-button"> Go to Checkout</button>
      </div> </>) : (<>
          <form method="dialog">
          <button onClick={handleCartCloseBtn} className="text-button">Close</button>
        </form>
        <p>No items in cart!</p>
      </>)
      }
      </>}

    </dialog>
  )
}

export default Cart
