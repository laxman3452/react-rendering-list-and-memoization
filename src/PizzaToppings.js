import React, { useEffect, useState } from 'react';
// import { useState } from 'react';
import './index.css';

const pizzaToppings = [
    {
        id:'1',
        topping:'onion'
    },
    {
        id:'2',
        topping:'pineapple'
    }
]

function shuffle(originalArray){
    const shuffledArray = [...originalArray];
    for(let index = shuffledArray.length-1;index>0;index--){
        let randomIndex = Math.floor(Math.random()*(index+1));
        [shuffledArray[index],shuffledArray[randomIndex]]= [shuffledArray[randomIndex],shuffledArray[index]];

    }
    return shuffledArray;
}

export default function PizzaToppings() {
    const [toppings,setToppings] = useState(pizzaToppings);

    function removeToppings(topping){
        setToppings(toppings.filter(i => i !== topping));
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setToppings(shuffle(toppings));
        },2000);

        return () => clearInterval(interval);
    });

  return (
   <div>
    {toppings.map((item)=>{
        // return <li key={item.id}>
        // <h1>{item.topping}</h1>
        // <button onClick={()=>{removeToppings(item)}}>remove</button>
        // </li>
    return <li key={item.id}>
        <label htmlfor = {item.topping}>{item.topping}</label>
        <input type="text" name={item.topping} id={item.id} defaultValue={item.topping} />
        <button onClick={()=>{removeToppings(item)}}>X</button>
    </li>
      
    })}
   </div>
  )
}



