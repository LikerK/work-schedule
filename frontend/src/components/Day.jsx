import { motion, AnimatePresence } from "framer-motion"

const Day = ({ day, setActiveDay }) => {

  const variants = {
    open: { width: '100%' },
    closed: { width: '0%' },
  }

  console.log(`render ${day.name}`)
  const Lessons = ({ lessons }) => {
    return (
      <motion.div
        className="lessons"
        initial={{ height: '0' }}
        animate={{ height: 'auto' }}
        transition={{ duration: 1 }}
        exit={{ height: '0' }}
      >
        {lessons.map(lesson => (
          <div className="lesson">
            <div className="lesson-name">{lesson.name}</div>
            <div className="lesson-time">{lesson.time}</div>
          </div>
        ))}
      </motion.div>
    )
  }

  return (
    <div className="day" onClick={() => setActiveDay(day.name)}>
      <div className="header">
        <motion.h4
          animate={day.active ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 1 }}
        >{day.name}</motion.h4>
      </div>
      <AnimatePresence initial={false}>
        {day.active ? <Lessons lessons={day.lessons} /> : null}
      </AnimatePresence>

    </div>
  )
}

export default Day;
