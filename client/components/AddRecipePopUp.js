import React from "react";

const AddRecipePopUp = (props) => 
{
  return (props.trigger) ? (
    <div classname="popup">
      <div className="popup-inner">
        <button onClick={() => props.setTrigger(false)}className="close-btn">Add</button>
        {props.children}      
      </div>
    </div>
  ) : "";
}

export default AddRecipePopUp;