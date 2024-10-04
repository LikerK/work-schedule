import { useEffect, useState } from "react";
import axios from 'axios';
import Day from "./Day.jsx";


const Days = () => {
  const [days, setDays] = useState([]);


  useEffect(async () => {
    const { data }  = await axios.get('/api/v1/data');
    setDays(data);
  }, []);


  const setActiveDay = (name) => {
    setDays(() => days.map(day => {
      if (day.name === name) {
        return { ...day, active: true }
      }
      if (day.name !== name && day.active) {
        return { ...day, active: false }
      }
      return day;
    }))
  }

  return (
    <div className="days">
      {days?.map(day => <Day day={day} setActiveDay={setActiveDay} />)}
    </div>
  )
}

export default Days;
