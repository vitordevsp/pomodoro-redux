const toDoList = {
  add: (indicator, name) => ({
    type: 'ADD_TASK',
    value: {
      done: false,
      indicator,
      name,
    },
  }),

  edit: (indicator, indexTask, newNameTask) => ({
    type: 'EDIT_TASK',
    value: {
      indicator,
      indexTask,
      newNameTask,
    },
  }),

  del: (indicator, indexTask) => ({
    type: 'DEL_TASK',
    value: {
      indicator,
      indexTask,
    },
  }),

  change: (indicator, indexTask) => ({
    type: 'CHANGE_DONE',
    value: {
      indicator,
      indexTask,
    },
  }),

  moving: (indicatorPomodoro, indexTask, objTask, newIndicator) => ({
    type: 'MOVING_TASK',
    value: {
      indicatorPomodoro,
      indexTask,
      objTask,
      newIndicator,
    },
  }),
}

export default toDoList
