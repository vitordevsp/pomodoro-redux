import React from 'react'
import Card from '../../components/Card'
import Timer from './Timer'
import SelectedPomodoro from './SelectedPomodoro'
import ToDoList from './toDoList'


function CardTimer() {
    return (
        <Card>
            <Timer />
            <SelectedPomodoro />
            <ToDoList />
        </Card>
    )
}


export default CardTimer
