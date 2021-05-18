const findAndModifyPomodoro = (arrayPomodoros, indicator, functionModify) =>
  arrayPomodoros.map((obj) =>
    obj.indicator !== indicator ? obj : functionModify(obj),
  )

const verifyCompletedPomodoro = (obj) => {
  const objDone = obj.toDoList.find((task) => task.done === false)

  return {
    ...obj,
    completed: !objDone,
  }
}

export { findAndModifyPomodoro, verifyCompletedPomodoro }
