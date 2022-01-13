import React from "react";
import { useState } from "react/cjs/react.development";

const AddRecipePopUp = (props) => 
{

  const [ing, setIng] = useState('');

  const twoFunctions = () => {
    props.setTrigger(false);
    props.setIngredient(ing);
  }

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button onClick={/*() => props.setTrigger(false)*/twoFunctions} className="close-btn">Add</button>
        <p>input the main ingredient:</p>
        <input onChange={e => setIng(e.target.value)} type="text" />      
      </div>
    </div>
  ) : "";
}

export default AddRecipePopUp;