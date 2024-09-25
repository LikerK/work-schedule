import { useState } from "react";
import Day from "./Day.jsx";


const Days = () => {

  const data = [
    { name: 'Понедельник', lessons: [{ name: 'Alex', time: '18:00' }, { name: 'Kirill', time: '17:00' }], active: true },
    { name: 'Вторник', lessons: [{ name: 'Alex', time: '18:00' }, { name: 'Kirill', time: '17:00' }], active: false },
    { name: 'Среда', lessons: [{ name: 'Alex', time: '18:00' }, { name: 'Kirill', time: '17:00' }], active: false }
  ];

  const [days, setDays] = useState(data);

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
      {days.map(day => <Day day={day} setActiveDay={setActiveDay} />)}
    </div>
  )
}

export default Days;
