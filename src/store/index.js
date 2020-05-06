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


const findAndModifyPomodoro2 = (arrayPomodoros, indicator, functionModify) => {
    return arrayPomodoros.map((obj) => (obj.indicator !== indicator) ?
        obj : functionModify(obj))
}

const verifyCompletedPomodoro = obj => {
    const objDoneFalse = !!obj.toDoList.find(task => task.done === false)
    console.log('completed: ', objDoneFalse ? false : true)
    return ({
        ...obj,
        completed: objDoneFalse ? false : true
    })
}


function reducer(state = INITIAL_STATE, action) {

    // função generica que é usada varias vezes no ToDoList
    const findAndModifyPomodoro = (functionModify) => {
        return state.pomodoros.map((obj) => (obj.indicator !== action.value.indicator) ?
            obj : functionModify(obj))
    }

    switch (action.type) {

        // -------- Pomodoro ---------
        case 'ADD_POMODORO':
            return { ...state, pomodoros: [...state.pomodoros, action.value] }

        case 'DEL_POMODORO': {
            const removeAndSelect = obj => obj.indicator !== action.value

            const rearrangingArray = (obj, index) => ({ ...obj, indicator: `#${++index}` })

            const newArray = state.pomodoros.filter(removeAndSelect).map(rearrangingArray)

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
            // gerando pomodoro com a nova tarefa
            const newTaskPomodoro = obj => ({
                ...obj,
                toDoList: [...obj.toDoList, action.value]
            })

            // substituindo pomodoro com a nova tarefa
            const newArrayPomodoros = findAndModifyPomodoro(newTaskPomodoro)

            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        case 'EDIT_TASK':
            return { ...state }

        case 'DEL_TASK': {
            const delTaskPomodoro = obj => ({
                ...obj,
                toDoList: obj.toDoList.filter((task, index) => index !== action.value.indexTask)
            })

            // substituindo pomodoro sem a tarefa deletada
            const newArrayPomodoros = findAndModifyPomodoro(delTaskPomodoro)

            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        case 'CHANGE_DONE': {
            const { indexTask, indicator } = action.value

            const changeTaskPomodoro = obj => ({
                ...obj,
                toDoList: obj.toDoList.map((task, index) => (index !== indexTask) ?
                    task : { ...task, done: !task.done })
            })

            let newArrayPomodoros = findAndModifyPomodoro2(state.pomodoros, indicator, changeTaskPomodoro)

            newArrayPomodoros = findAndModifyPomodoro2(newArrayPomodoros, indicator, verifyCompletedPomodoro)

            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        default:
            return state
    }
}

const store = createStore(reducer)

export default store
