import React from 'react'
import { useSelector } from 'react-redux'

import Card from '../../components/Card'
import SelectedPomodoro from './SelectedPomodoro'
import Timer from './timer'
import ToDoList from './toDoList'

function CardTimer() {
  const array = useSelector((state) => state.pomodoros)
  const pomodoroSelected = array.find((obj) => obj.selected)

  return (
    <Card>
      <Timer obj={pomodoroSelected} />
      <SelectedPomodoro obj={pomodoroSelected} />
      <ToDoList obj={pomodoroSelected} />
    </Card>
  )
}

export default CardTimer
