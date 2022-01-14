import React, {useState} from "react";


const Recipe = (props) => 
{

  const [added, setAdded] = useState('');

  const addRecipe = () => {
    console.log("AAAAA", props)
    fetch ('/addRecipe',{
      method: 'POST',
      body: JSON.stringify({ recipe: props.info, ingredient: props.ingredient}),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(data => data.json())
      .then(data => {
        console.log('recipe added to DB', data);
        setAdded('Added to my collection');
      })
  }

  const twoFunctions = () => {
    console.log("WHYYYYYY", props.ingredient);
    props.setTrigger(true);
    addRecipe();
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
      <button onClick={addRecipe}> Add to my Collection</button>
      <p>{added}</p>
      {/* <button onClick={twoFunctions}> Add to my Collection</button> */}
    </div>
  )
}

export default Recipe;