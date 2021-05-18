import { findAndModifyPomodoro } from './helpers/pomodoroHelpers'
import {
  newTask,
  editTask,
  delTask,
  changeDoneTask,
  movingTask,
} from './helpers/taskHelpers'
import INITIAL_STATE from './state'

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // -------- Pomodoro ---------
    case 'ADD_POMODORO': {
      return { ...state, pomodoros: [...state.pomodoros, action.value] }
    }

    case 'EDIT_POMODORO': {
      const { indicator, name } = action.value

      const editNamePomodoro = (obj) => ({ ...obj, name })

      const newArray = findAndModifyPomodoro(
        state.pomodoros,
        indicator,
        editNamePomodoro,
      )

      return { ...state, pomodoros: [...newArray] }
    }

    case 'DEL_POMODORO': {
      const removePomodoro = (obj) => obj.indicator !== action.value

      const rearrangingArray = (obj, index) => ({
        ...obj,
        indicator: `#${index + 1}`,
      })

      const newArray = state.pomodoros
        .filter(removePomodoro)
        .map(rearrangingArray)

      return { ...state, pomodoros: [...newArray] }
    }

    case 'SELECT_POMODORO': {
      const newArray = state.pomodoros.map((obj) => ({
        ...obj,
        selected: obj.indicator === action.value,
      }))

      // validando se selecionou, senão seleciona o ultimo
      const pomodoroSelected = newArray.find((obj) => obj.selected)
      if (!pomodoroSelected) newArray[newArray.length - 1].selected = true

      return { ...state, pomodoros: [...newArray] }
    }

    case 'INSERT_TIME_POMODORO': {
      const { indicator, time, completed } = action.value

      const insertTimePomodoro = (obj) => ({ ...obj, time, completed })

      const newArray = findAndModifyPomodoro(
        state.pomodoros,
        indicator,
        insertTimePomodoro,
      )

      return { ...state, pomodoros: [...newArray] }
    }

    case 'NEXT_POMODORO': {
      const indicator = action.value
      const arrayPomodoros = [...state.pomodoros]

      const indexPomodoro = arrayPomodoros.findIndex(
        (obj) => obj.indicator === indicator,
      )
      const nextPomodoro = state.pomodoros[indexPomodoro + 1]

      if (nextPomodoro) {
        arrayPomodoros[indexPomodoro].selected = false
        arrayPomodoros[indexPomodoro + 1].selected = true
      } else {
        alert('Todos os Pomodoros foram concluidos!!!')
      }

      return { ...state, pomodoros: arrayPomodoros }
    }

    // -------- ToDoList ---------
    case 'ADD_TASK': {
      const newObj = action.value
      const { indicator } = action.value
      const arrayPomodoros = state.pomodoros

      const newArrayPomodoros = newTask(newObj, indicator, arrayPomodoros)

      return { ...state, pomodoros: [...newArrayPomodoros] }
    }

    case 'EDIT_TASK': {
      const { indicator, indexTask, newNameTask } = action.value
      const arrayPomodoros = state.pomodoros

      const newArrayPomodoros = editTask(
        indicator,
        indexTask,
        newNameTask,
        arrayPomodoros,
      )

      return { ...state, pomodoros: [...newArrayPomodoros] }
    }

    case 'DEL_TASK': {
      const { indexTask, indicator } = action.value
      const arrayPomodoros = state.pomodoros

      const newArrayPomodoros = delTask(indexTask, indicator, arrayPomodoros)

      return { ...state, pomodoros: [...newArrayPomodoros] }
    }

    case 'CHANGE_DONE': {
      const { indexTask, indicator } = action.value
      const arrayPomodoros = state.pomodoros

      const newArrayPomodoros = changeDoneTask(
        indexTask,
        indicator,
        arrayPomodoros,
      )

      return { ...state, pomodoros: [...newArrayPomodoros] }
    }

    case 'MOVING_TASK': {
      const { indicatorPomodoro, indexTask, objTask, newIndicator } =
        action.value
      const arrayPomodoros = state.pomodoros

      const newArrayPomodoros = movingTask(
        indicatorPomodoro,
        indexTask,
        objTask,
        newIndicator,
        arrayPomodoros,
      )

      return { ...state, pomodoros: [...newArrayPomodoros] }
    }

    default:
      return state
  }
}

export default reducer
