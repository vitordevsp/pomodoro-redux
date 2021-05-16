const pomodoro = {
  add: (indicator, name) => ({
    type: 'ADD_POMODORO',
    value: {
      indicator,
      name,
      selected: false,
      completed: false,
      time: false,
      toDoList: [],
    },
  }),

  edit: (indicator, name) => ({
    type: 'EDIT_POMODORO',
    value: {
      indicator,
      name,
    },
  }),

  del: (indicator) => ({
    type: 'DEL_POMODORO',
    value: indicator,
  }),

  select: (indicator) => ({
    type: 'SELECT_POMODORO',
    value: indicator,
  }),

  time: (indicator, time, completed = false) => ({
    type: 'INSERT_TIME_POMODORO',
    value: {
      indicator,
      time,
      completed,
    },
  }),

  next: (indicator) => ({
    type: 'NEXT_POMODORO',
    value: indicator,
  }),
}

export default pomodoro
