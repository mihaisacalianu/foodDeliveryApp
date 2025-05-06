import React from 'react'
import MealItem from './MealItem'
import caesarSalad from '../assets/caesar-salad.jpg';

function Meals() {
  return (
    <div id="meals">
      <MealItem
      id='m3'
      name="Caesar Salad"
      src={caesarSalad}
      price={7.99}
      description="Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings."
      />
      <MealItem
      id='m4'
      name="Spaghetti Carbonara"
      src={caesarSalad}
      price={10.99}
      description="Al dente spaghetti with a creamy sauce made from egg yolk, pecorino cheese, pancetta, and pepper."
      />
    </div>
  )
}

export default Meals
