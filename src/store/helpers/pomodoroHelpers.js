const findAndModifyPomodoro = (arrayPomodoros, indicator, functionModify) =>
  arrayPomodoros.map((obj) =>
    obj.indicator !== indicator ? obj : functionModify(obj),
  )

const verifyCompletedPomodoro = (obj) => {
  const objDoneFalse = obj.toDoList.find((task) => task.done === false)

  return {
    ...obj,
    completed: !objDoneFalse,
  }
}

export { findAndModifyPomodoro, verifyCompletedPomodoro }
