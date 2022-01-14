import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enUS from 'date-fns/locale/en-US';


const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})


const MealPlanner = (props) => {

  const [newMeal, setNewMeal] = useState({title: "", start: "", end: ""});
  const [allMeals, setAllMeals] = useState([]);

  const [allOptions, setAllOptions] = useState([]);

  useEffect( () => {
    fetch('/getMeals')
      .then(data => data.json())
      .then(data => {
        console.log("MEALS", data);
        setAllMeals(data);
      })

      fetch('/getRecipes')
      .then(data => data.json())
      .then (data => {
              console.log("my collection", data);
              setAllOptions(data);
            });

  }, [])


  const addMeal = () => {
    fetch('/addMeal', {
      method: 'POST',
      body: JSON.stringify(newMeal),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(data => data.json())
    .then(data => {
      console.log('meal added to DB', data);
      setAllMeals(data);
    });
  }
  

  return (
    <div>
      <h1> Meal Planner </h1>
      <h3> Add New Meal </h3>
      <div>

        <select onChange={e => setNewMeal({...newMeal, title: e.target.value})}>

          {allOptions.map(elem => {
            return <option value={elem.label}>{elem.label}</option>
          })}
          
          {/* <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option> */}
        </select>

        {/* <input type="text" placeholder="Add a meal" style={{width: "20%", marginRight: "10px"}}
          value={newMeal.title} onChange={e => setNewMeal({...newMeal, title: e.target.value})}
        /> */}
        <DatePicker placeholderText="Pick a date" style={{marginRight: "10px"}}
          selected={newMeal.start} onChange={start => setNewMeal({...newMeal, start, end: start})}
        />
        {/* <DatePicker placeholderText="End Date" style={{marginRight: "10px"}}
          selected={newMeal.end} onChange={end => setNewMeal({...newMeal, end})}
        /> */}
        <button style={{marginTop: "10px", marginBottom: "20px"}} onClick={addMeal}>
        {/* <button style={{marginTop: "10px", marginBottom: "20px"}} onClick={handleAddMeal}> */}
          Add Meal
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={allMeals}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  )
}

export default MealPlanner;