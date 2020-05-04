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
        case 'ADD_POMODORO':
            return { ...state, pomodoros: [...state.pomodoros, action.value] }

        case 'DEL_POMODORO':
            const newArray = state.pomodoros
                .filter(obj => obj.indicator !== action.value)
                .map((obj, index) => ({ ...obj, indicator: `#${++index}` }))
            return { ...state, pomodoros: [...newArray] }

        default:
            return state
    }
}

const store = createStore(reducer)

export default store
