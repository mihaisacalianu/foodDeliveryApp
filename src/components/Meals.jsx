import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import caesarSalad from '../assets/caesar-salad.jpg';

function Meals() {

  const [loadMeals, setLoadMeals] = useState([]);

  useEffect(()=>{
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if(!response.ok){
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setLoadMeals(data);
    }
    fetchMeals();
  },[])



  return (
    <ul id="meals">
      {loadMeals.map(meal => <li key={meal.id}>
        <MealItem
        id={meal.id}
        name={meal.name}
        src={`http://localhost:3000/${meal.image}`}
        price={meal.price}
        description={meal.description}
      /></li>)}
    </ul>
  )
}

export default Meals
