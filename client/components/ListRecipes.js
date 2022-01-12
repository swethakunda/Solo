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



  return (
    <div>
      <table>
        <thead>
          <tr key={"header"}>
            <th></th>
            <th>image</th>
            <th>Name</th>
            <th>Calories</th>
            <th>Time</th>
          </tr>
          {listRecipes.map(recipe => (
            <tr>
              <td><input type="checkbox" /></td>
              <td><img src={recipe.thumbnail}/></td>
              <td>{recipe.label}</td>
              <td>{recipe.calories}</td>
              <td>{recipe.totalTime}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default ListRecipes; 