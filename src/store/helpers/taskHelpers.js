import { findAndModifyPomodoro, verifyCompletedPomodoro } from './pomodoroHelpers'

const newTask = (newObj, indicator, arrayPomodoros) => {
  const newTaskPomodoro = (obj) => ({
    ...obj,
    toDoList: [...obj.toDoList, newObj],
  })

  let newArrayPomodoros = findAndModifyPomodoro(arrayPomodoros, indicator, newTaskPomodoro)
  newArrayPomodoros = findAndModifyPomodoro(newArrayPomodoros, indicator, verifyCompletedPomodoro)

  return newArrayPomodoros
}

const editTask = (indicator, indexTask, newNameTask, arrayPomodoros) => {
  const editTaskPomodoro = (obj) => ({
    ...obj,
    toDoList: obj.toDoList.map((task, index) => ((index !== indexTask)
      ? task : { ...task, name: newNameTask })),
  })

  let newArrayPomodoros = findAndModifyPomodoro(arrayPomodoros, indicator, editTaskPomodoro)

  newArrayPomodoros = findAndModifyPomodoro(newArrayPomodoros, indicator, verifyCompletedPomodoro)

  return newArrayPomodoros
}

const delTask = (indexTask, indicator, arrayPomodoros) => {
  const delTaskPomodoro = (obj) => ({
    ...obj,
    toDoList: obj.toDoList.filter((task, index) => index !== indexTask),
  })

  let newArrayPomodoros = findAndModifyPomodoro(arrayPomodoros, indicator, delTaskPomodoro)

  newArrayPomodoros = findAndModifyPomodoro(newArrayPomodoros, indicator, verifyCompletedPomodoro)

  return newArrayPomodoros
}

const changeDoneTask = (indexTask, indicator, arrayPomodoros) => {
  const changeDoneTaskPomodoro = (obj) => ({
    ...obj,
    toDoList: obj.toDoList.map((task, index) => ((index !== indexTask)
      ? task : { ...task, done: !task.done })),
  })

  let newArrayPomodoros = findAndModifyPomodoro(arrayPomodoros, indicator, changeDoneTaskPomodoro)

  newArrayPomodoros = findAndModifyPomodoro(newArrayPomodoros, indicator, verifyCompletedPomodoro)

  return newArrayPomodoros
}

const movingTask = (indicator, indexTask, objTask, newIndicator, arrayPomodoros) => {
  const newObjTask = { ...objTask }
  newObjTask.indicator = newIndicator

  let newArrayPomodoros = delTask(indexTask, indicator, arrayPomodoros)
  newArrayPomodoros = newTask(newObjTask, newIndicator, newArrayPomodoros)

  return newArrayPomodoros
}

export {
  newTask,
  editTask,
  delTask,
  changeDoneTask,
  movingTask,
}
