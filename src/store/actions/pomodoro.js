const pomodoro = {
    add: (indicator, name) => ({
        type: 'ADD_POMODORO',
        value: {
            indicator,
            name,
            selected: false,
            completed: false,
            time: false,
            toDoList: []
        }
    }),

    edit: (indicator, name) => ({
        type: 'EDIT_POMODORO',
        value: {
            indicator,
            name
        }
    }),

    del: (indicator) => ({
        type: 'DEL_POMODORO',
        value: indicator
    }),

    select: (indicator) => ({
        type: 'SELECT_POMODORO',
        value: indicator
    }),
}

export default pomodoro
