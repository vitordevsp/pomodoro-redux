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
      ],
    },
  ],
}

export default INITIAL_STATE
