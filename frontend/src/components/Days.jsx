import { useEffect, useState } from "react";
import axios from 'axios';
import Day from "./Day.jsx";


const Days = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/v1/data');
      setDays(data);
    }
    fetchData();
  }, []);

  const daysNames = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const currentMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const currentDay = date.getDay() || 7;
  date.setDate(date.getDate() - currentDay + 1);

  const dates = daysNames.map((name, i) => {
    const dateName = `${date.getDate()} ${name}`;
    date.setDate(date.getDate() + 1);
    return dateName;
  });

  console.log(dates);
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
  };

  return (
    <>
      <h1>{ currentMonth }</h1>
      <div className="days">
        {days?.map((day, i) => <Day day={day} dayName={dates[i]} key={i} setActiveDay={setActiveDay} />)}
      </div>
    </>
  )
};

export default Days;
