import { motion } from "framer-motion"

const Day = ({ day, setActiveDay, dayName }) => {

  // const variants = {
  //   open: { width: '100%' },
  //   closed: { width: '0%' },
  // }

  console.log(`render ${day.name}`)
  const Lessons = ({ lessons }) => {
    return (
      <motion.div
      // className="lessons"
      // initial={{ height: '0' }}
      // animate={{ height: 'auto' }}
      // transition={{ duration: 1 }}
      // exit={{ height: '0' }}
      >
        {lessons.map(lesson => (
          <div className="lesson">
            <div className="lesson-time">{lesson.time}</div>
            <span>|</span>
            <div className="lesson-name">{lesson.name}</div>
          </div>
        ))}
      </motion.div>
    )
  }
  const [number, name] = dayName.split(' ');
  return (
    <div className="day" onClick={() => setActiveDay(day.name)}>
      <div className="header">
        <h4>{number}</h4>
        <h4>{name}</h4>

        {/* {day.active && <button>+</button>} */}
      </div>
      {/* {day.active ? <Lessons lessons={day.lessons} /> : null} */}
      <Lessons lessons={day.lessons} />
      <form className="lesson" action="">
        <input placeholder="00:00" className="lesson-time" type="text" />
        <input placeholder="Имя" className="lesson-name" type="text" />
      </form>

    </div>
  )
}

export default Day;
