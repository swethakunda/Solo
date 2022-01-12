import React from "react";
import { useEffect } from "react/cjs/react.development";

const Recipe = (props) => 
{

  
  const addRecipe = () => {
    console.log("AAAAA", props.info)
    fetch ('/addRecipe',{
      method: 'POST',
      body: JSON.stringify({ recipe: props.info, ingredient: 'peas'}),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(data => data.json())
      .then(data => console.log('AAAA', data));
  }

  return (
    <div>
      <h1>{props.info.label}</h1>
      <p>Calories: {Math.floor(props.info.calories)}</p>
      <img src={props.info.image} alt=""/>
      <button onClick={addRecipe}> Add to my Collection</button>
    </div>
  )
}

export default Recipe;