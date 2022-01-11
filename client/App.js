import React, { useEffect } from "react";
import Recipe from "./Recipe";

const App = () => {

  useEffect( () => {
    return getRecipes();
  }, []);

  const getRecipes =  () => {

    console.log ('ZZZZZZZ')
    fetch ('/recipes')
      .then(data => data.json())
      .then(data => console.log('AAAA', data));

  }

  return ( 
    <div>
        <h1>Hellooo React</h1>
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">Search</button>
        </form>
        <Recipe />
        <Recipe />
    </div>
  );

}

export default App;