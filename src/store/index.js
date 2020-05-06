import { createStore } from 'redux'


const INITIAL_STATE = {
    pomodoros: [
        {
            indicator: '#1',
            name: 'Primeiro pomodoro',
            selected: true,
            completed: false,
            time: false,
            toDoList: [
                {
                    done: false,
                    indicator: '#1',
                    name: 'Primeira tarefa',
                }
            ]
        }
    ]
}


const findAndModifyPomodoro = (arrayPomodoros, indicator, functionModify) => {
    return arrayPomodoros.map((obj) => (obj.indicator !== indicator) ?
        obj : functionModify(obj))
}

const verifyCompletedPomodoro = obj => {
    const objDoneFalse = obj.toDoList.find(task => task.done === false)
    return ({
        ...obj,
        completed: objDoneFalse ? false : true
    })
}


function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        // -------- Pomodoro ---------
        case 'ADD_POMODORO':
            return { ...state, pomodoros: [...state.pomodoros, action.value] }

        case 'DEL_POMODORO': {
            const removePomodoro = obj => obj.indicator !== action.value

            const rearrangingArray = (obj, index) => ({ ...obj, indicator: `#${++index}` })

            const newArray = state.pomodoros.filter(removePomodoro).map(rearrangingArray)

            return { ...state, pomodoros: [...newArray] }
        }

        case 'SELECT_POMODORO': {
            const newArray = state.pomodoros.map(obj => ({
                ...obj,
                selected: (obj.indicator === action.value) ? true : false
            }))

            // validando se selecionou, senão seleciona o ultimo
            const pomodoroSelected = state.pomodoros.find(obj => obj.selected)
            if (!pomodoroSelected) newArray[newArray.length - 1].selected = true

            return { ...state, pomodoros: [...newArray] }
        }

        // -------- ToDoList ---------
        case 'ADD_TASK': {
            const newTaskPomodoro = obj => ({
                ...obj,
                toDoList: [...obj.toDoList, action.value]
            })

            let newArrayPomodoros = findAndModifyPomodoro(state.pomodoros, action.value.indicator, newTaskPomodoro)

            newArrayPomodoros = findAndModifyPomodoro(newArrayPomodoros, action.value.indicator, verifyCompletedPomodoro)

            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        case 'EDIT_TASK':
            return { ...state }

        case 'DEL_TASK': {
            const { indexTask, indicator } = action.value

            const delTaskPomodoro = obj => ({
                ...obj,
                toDoList: obj.toDoList.filter((task, index) => index !== indexTask)
            })

            let newArrayPomodoros = findAndModifyPomodoro(state.pomodoros, action.value.indicator, delTaskPomodoro)

            newArrayPomodoros = findAndModifyPomodoro(newArrayPomodoros, indicator, verifyCompletedPomodoro)

            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        case 'CHANGE_DONE': {
            const { indexTask, indicator } = action.value

            const changeDoneTaskPomodoro = obj => ({
                ...obj,
                toDoList: obj.toDoList.map((task, index) => (index !== indexTask) ?
                    task : { ...task, done: !task.done })
            })

            let newArrayPomodoros = findAndModifyPomodoro(state.pomodoros, indicator, changeDoneTaskPomodoro)

            newArrayPomodoros = findAndModifyPomodoro(newArrayPomodoros, indicator, verifyCompletedPomodoro)

            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        default:
            return state
    }
}

const store = createStore(reducer)

export default store
