import { useState } from "react";
import Day from "./Day.jsx";

const Days = () => {

  const data = [
    {name: 'Понедельник', lessons: ['Alex', 'Sergei'], active: true},
    {name: 'Вторник', lessons: ['Alex', 'Sergei'], active: false},
    {name: 'Среда', lessons: ['Alex', 'Sergei'], active: false}
  ];

  const [days, setDays] = useState(data);

  const setActiveDay = (name) => {
    setDays(() => days.map(day => {
      if (day.name === name) {
        return {...day, active: true}
      }
      if (day.name !== name && day.active) {
        return {...day, active: false}
      }
      return day;
    }))
  }

  return (
    <div className="days">
      {days.map(day => <Day day={day} setActiveDay={setActiveDay}/>)}
    </div>
  )
}

export default Days;
