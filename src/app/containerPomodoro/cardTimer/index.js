import React from 'react'
import Card from '../../components/Card'
import Timer from './Timer'
import SelectedPomodoro from './SelectedPomodoro'


function CardTimer() {
    return (
        <Card>
            <Timer />
            <SelectedPomodoro />
        </Card>
    )
}


export default CardTimer
