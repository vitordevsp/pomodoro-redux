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
                },
                {
                    done: true,
                    indicator: '#1',
                    name: 'Segunda tarefa',
                }
            ]
        }
    ]
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        // -------- Pomodoro ---------
        case 'ADD_POMODORO':
            return { ...state, pomodoros: [...state.pomodoros, action.value] }

        case 'DEL_POMODORO': {
            const newArray = state.pomodoros
                .filter(obj => obj.indicator !== action.value) // removendo pomodoro
                .map((obj, index) => ({ ...obj, indicator: `#${++index}` })) // reorganizando a lista
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
            const newArrayPomodoros = state.pomodoros.map((obj) => (obj.indicator !== action.value.indicator) ?
                obj : newTaskPomodoro(obj))

            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        case 'EDIT_TASK':
            return { ...state }

        case 'DEL_TASK': {
            const delTaskPomodoro = obj => ({
                ...obj,
                toDoList: obj.toDoList.filter((toDo, index) => index !== action.value.indexTask)
            })

            // substituindo pomodoro com a nova tarefa
            const newArrayPomodoros = state.pomodoros.map((obj) => (obj.indicator !== action.value.indicator) ?
                obj : delTaskPomodoro(obj))
            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        case 'CHANGE_DONE':
            return { ...state }

        default:
            return state
    }
}

const store = createStore(reducer)

export default store
