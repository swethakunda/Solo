import React, {useState} from "react";
import AddRecipePopUp from "./AddRecipePopUp";

const Recipe = (props) => 
{

  const [popUp, setPopUp] = useState(false);

  const addRecipe = () => {
    console.log("AAAAA", props.info)
    fetch ('/addRecipe',{
      method: 'POST',
      body: JSON.stringify({ recipe: props.info, ingredient: 'peas'}),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(data => data.json())
      .then(data => console.log('recipe added to DB', data));
  }

  return (
    <div>
      <h1><a href={props.info.url}>{props.info.label}</a></h1>
      <p>Calories: {Math.floor(props.info.calories)}</p>
      
      <div className="recipe-card">
        <img src={props.info.image} alt=""/>
        
        <div>
          Ingredients:
          <ul>{props.info.ingredientLines.map( (item, i) => (
          <li key={i}>{item}</li>
          ))}</ul>
          <></>
          Recipe:
        </div>
      </div>
      
      <br/>
      <button onClick={addRecipe/*setPopUp(true)*/}> Add to my Collection</button>

      <AddRecipePopUp trigger={popUp} setTrigger={setPopUp}>
        <h3>Pop Up</h3>
      </AddRecipePopUp>
    </div>
  )
}

export default Recipe;