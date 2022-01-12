import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const ListRecipes = (props) => 
{

  const [listRecipes, setListRecipes] = useState('');

  useEffect( () => {
    fetch('/getRecipes')
      .then(data => data.json())
      .then (data => {
                      console.log(data);
                      setListRecipes(data[0].label);
                    });
  }, [])



  return (
    <div>
      Return: {listRecipes}
    </div>
  );
}

export default ListRecipes; 