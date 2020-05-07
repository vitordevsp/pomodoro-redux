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

const toDo = {
    newTask: (newObj, indicator, arrayPomodoros) => {
        const newTaskPomodoro = obj => ({
            ...obj,
            toDoList: [...obj.toDoList, newObj]
        })

        let newArrayPomodoros = findAndModifyPomodoro(arrayPomodoros, indicator, newTaskPomodoro)
        newArrayPomodoros = findAndModifyPomodoro(newArrayPomodoros, indicator, verifyCompletedPomodoro)

        return newArrayPomodoros
    },

    editTask: () => {

    },

    delTask: (indexTask, indicator, arrayPomodoros) => {
        const delTaskPomodoro = obj => ({
            ...obj,
            toDoList: obj.toDoList.filter((task, index) => index !== indexTask)
        })

        let newArrayPomodoros = findAndModifyPomodoro(arrayPomodoros, indicator, delTaskPomodoro)

        newArrayPomodoros = findAndModifyPomodoro(newArrayPomodoros, indicator, verifyCompletedPomodoro)

        return newArrayPomodoros
    },

    changeDoneTask: (indexTask, indicator, arrayPomodoros) => {
        const changeDoneTaskPomodoro = obj => ({
            ...obj,
            toDoList: obj.toDoList.map((task, index) => (index !== indexTask) ?
                task : { ...task, done: !task.done })
        })

        let newArrayPomodoros = findAndModifyPomodoro(arrayPomodoros, indicator, changeDoneTaskPomodoro)

        newArrayPomodoros = findAndModifyPomodoro(newArrayPomodoros, indicator, verifyCompletedPomodoro)

        return newArrayPomodoros
    },

    movingTask: (indicator, indexTask, objTask, newIndicator, arrayPomodoros) => {
        objTask.indicator = newIndicator

        let newArrayPomodoros = toDo.delTask(indexTask, indicator, arrayPomodoros)
        newArrayPomodoros = toDo.newTask(objTask, newIndicator, newArrayPomodoros)

        return newArrayPomodoros
    }
}


function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        // -------- Pomodoro ---------
        case 'ADD_POMODORO': {
            return { ...state, pomodoros: [...state.pomodoros, action.value] }
        }

        case 'EDIT_POMODORO': {
            return { ...state }
        }

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
            const newObj = action.value
            const indicator = action.value.indicator
            const arrayPomodoros = state.pomodoros

            const newArrayPomodoros = toDo.newTask(newObj, indicator, arrayPomodoros)

            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        case 'EDIT_TASK': {
            return { ...state }
        }

        case 'DEL_TASK': {
            const { indexTask, indicator } = action.value
            const arrayPomodoros = state.pomodoros

            const newArrayPomodoros = toDo.delTask(indexTask, indicator, arrayPomodoros)

            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        case 'CHANGE_DONE': {
            const { indexTask, indicator } = action.value
            const arrayPomodoros = state.pomodoros

            const newArrayPomodoros = toDo.changeDoneTask(indexTask, indicator, arrayPomodoros)

            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        case 'MOVING_TASK': {
            const { indicatorPomodoro, indexTask, objTask, newIndicator } = action.value
            const arrayPomodoros = state.pomodoros

            const newArrayPomodoros = toDo.movingTask(indicatorPomodoro, indexTask, objTask, newIndicator, arrayPomodoros)

            return { ...state, pomodoros: [...newArrayPomodoros] }
        }

        default:
            return state
    }
}

export default reducer