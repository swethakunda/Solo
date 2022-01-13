import React, { useState } from "react";
import Recipe from "./Recipe";
// import AddRecipePopUp from "./AddRecipePopUp";

const SearchRecipes = (props) => 
{
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // const [popUp, setPopUp] = useState(false);
  // const [ingredient, setIngredient] = useState('');

  const getRecipes =  (e) => {

    e.preventDefault();
    // setSearchTerm('');
    /*fetch (`/recipes/${searchTerm}`)
      .then(data => data.json())
      .then(data => console.log('AAAA', data));*/
    const appID = '4b6f74d0';
    const appKey = 'e745526e12db6881f707320becf348a3';
    const requestString = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${appID}&app_key=${appKey}`;

    fetch(requestString)
     .then(data => data.json())
     .then(data => {console.log(data.hits); setSearchResults(data.hits)});
  }

  return (
    <div className='contents'>
      
      <form className="search-form" onSubmit={getRecipes}>
        <input className="search-bar" type="text"
          onChange={e => setSearchTerm(e.target.value )}/>
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="search-results">
        {
          searchResults.map((recipe, i) => (
            // <Recipe key={i} info={recipe.recipe} setTrigger={setPopUp} ingredient={ingredient}/>
            <Recipe key={i} info={recipe.recipe} ingredient={searchTerm}/>
          ))
        }
      </div>

      {/* <AddRecipePopUp trigger={popUp} setTrigger={setPopUp} setIngredient={setIngredient}>
    
      </AddRecipePopUp> */}

    </div>
  );
}

export default SearchRecipes; 