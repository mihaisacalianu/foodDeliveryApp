import React from 'react'

function MealItem() {
  return (
    <article className='meal-item'>
      <img src="" alt="meal image" />
      <h3>Cesar Salad</h3>
      <p className='meal-item-price'>$7.99</p>
      <p className='meal-item-description'>Cesar salad is a wonderfull salad for warm days</p>
      <button className='meal-item-actions'>Add to cart</button>
    </article>
  )
}

export default MealItem
