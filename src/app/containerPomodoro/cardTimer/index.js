import React from 'react'
import Card from '../../components/Card'
import Timer from './Timer'
import SelectedPomodoro from './SelectedPomodoro'
import ToDoList from './toDoList'
import { useSelector } from 'react-redux'


function CardTimer() {

    const array = useSelector(state => state.pomodoros)
    const pomodoroSelected = array.find(obj => obj.selected)


    return (
        <Card>
            <Timer obj={pomodoroSelected} />
            <SelectedPomodoro obj={pomodoroSelected} />
            <ToDoList obj={pomodoroSelected} />
        </Card>
    )
}


export default CardTimer
