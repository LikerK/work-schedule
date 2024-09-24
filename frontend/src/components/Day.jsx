const Day = ({ day, setActiveDay }) => {
  console.log(`render ${day.name}`)
  const Lessons = ({ lessons }) => {
    return (
      <div className="lessons">
        {lessons.map(lesson => <div className="lesson">{lesson}</div>)}
      </div>
    )
  }

  return (
    <div className="day" onClick={() => setActiveDay(day.name)}>
      <div className="header">
        { day.name }
      </div>
      { day.active ? <Lessons lessons={day.lessons}/> : null }
    </div>
  )
}

export default Day;
