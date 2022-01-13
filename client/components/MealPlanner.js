import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enUS from 'date-fns/locale/en-US'

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

const events = [
  {
    title: "Big Meeting",
    start: new Date(2022, 0, 1),
    end: new Date(2022, 0, 1)
  },
  {
    title: "Another Big Meeting",
    start: new Date(2022, 1, 1),
    end: new Date(2022, 1, 1)
  }
]


const MealPlanner = (props) => {

  const [newMeal, setNewMeal] = useState({title: "", start: "", end: ""});
  const [allMeals, setAllMeals] = useState(events);

  const handleAddMeal = () => {
    console.log("date constructor", new Date(2022, 0, 1))
    console.log("new meal", newMeal);
    setAllMeals([...allMeals, newMeal]);
  }

  return (
    <div>
      <h1> Meal Planner </h1>
      <h3> Add New Meal </h3>
      <div>
        <input type="text" placeholder="Add a meal" style={{width: "20%", marginRight: "10px"}}
          value={newMeal.title} onChange={e => setNewMeal({...newMeal, title: e.target.value})}
        />
        <DatePicker placeholderText="Pick a date" style={{marginRight: "10px"}}
          selected={newMeal.start} onChange={start => setNewMeal({...newMeal, start, end: start})}
        />
        {/* <DatePicker placeholderText="End Date" style={{marginRight: "10px"}}
          selected={newMeal.end} onChange={end => setNewMeal({...newMeal, end})}
        /> */}
        <button style={{marginTop: "10px", marginBottom: "20px"}} onClick={handleAddMeal}>
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