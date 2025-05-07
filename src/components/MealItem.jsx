import {useContext,useState} from 'react'
import CartContext from './states.jsx'

function MealItem({id,name,src,price,description}) {

  const [cartItems,setCartItems] = useContext(CartContext);


  function handleAddToCartBtn(id,name,price){

    const meal = {
      ...cartItems,
      items:[...cartItems.items ,{id,name,price,description,quantity: 1}]
  }
    setCartItems(meal);
  }

  return (
    <article className='meal-item'>
      <img src={src} alt="meal image" />
      <h3>{name}</h3>
      <p className='meal-item-price'>£{price}</p>
      <p className='meal-item-description'>{description}</p>
      <button onClick={()=>handleAddToCartBtn(id,name,price)} className='button meal-item-actions'>Add to cart</button>
    </article>
  )
}

export default MealItem
