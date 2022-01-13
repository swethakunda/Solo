import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const ListRecipes = (props) => 
{

  const [listRecipes, setListRecipes] = useState([]);

  useEffect( () => {
    fetch('/getRecipes')
      .then(data => data.json())
      .then (data => {
              console.log(data);
              setListRecipes(data);
            });
  }, [])

  const deleteRecipe = (id) => {
    console.log('target',id);
    fetch('/deleteRecipe/' + id, {
      method: 'DELETE'
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setListRecipes(data);
      });
  }


  return (
    <div className="contents">
      <br/><br/><br/><br/>
      <table className="list">
        <thead>
          <tr key={"header"}>
            
            <th></th>
            <th>Name</th>
            <th>Calories</th>
            <th>Time</th>
            <th></th>

          </tr>
          {listRecipes.map((recipe, i) => (
            <tr key={i}>
              
              <td><img src={recipe.thumbnail}/></td>
              <td><a href={recipe.url}>{recipe.label}</a></td>
              <td>{recipe.calories}</td>
              <td>{recipe.totalTime}</td>
              <td><button onClick={() => deleteRecipe(recipe._id)}>Delete</button></td>

            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default ListRecipes; 