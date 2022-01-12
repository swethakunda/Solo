import React, { useEffect, useState } from "react";
import {Route, Routes, Link} from "react-router-dom";
import ListRecipes from "./components/ListRecipes";
import SearchRecipes from "./components/SearchRecipe";

const App = () => {

  return ( 
    <div>
      <h1>Healthy Table</h1>

      <ul className="header">
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='list'>List</Link></li>
      </ul>

      <Routes>
        <Route path='/search' element={<SearchRecipes/>} />
        <Route path='/list' element={<ListRecipes/>} />
      </Routes>
        
    </div>
  );

}

export default App;