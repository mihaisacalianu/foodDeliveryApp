import React from 'react'
import MealItem from './MealItem'
import caesarSalad from '../assets/caesar-salad.jpg';

function Meals() {
  return (
    <div id="meals">
      <MealItem
      src={caesarSalad}
      price={7.99}
      description="Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings."
      />
      <MealItem
      src={caesarSalad}
      price={7.99}
      description="Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings."
      />
      <MealItem
      src={caesarSalad}
      price={7.99}
      description="Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings."
      />
    </div>
  )
}

export default Meals
