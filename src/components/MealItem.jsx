import React from 'react'

function MealItem({src,price,description}) {
  return (
    <article className='meal-item'>
      <img src={src} alt="meal image" />
      <h3>Cesar Salad</h3>
      <p className='meal-item-price'>£{price}</p>
      <p className='meal-item-description'>{description}</p>
      <button className='meal-item-actions'>Add to cart</button>
    </article>
  )
}

export default MealItem
