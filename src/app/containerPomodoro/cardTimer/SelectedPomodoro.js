import React from 'react'
import Horizontal from '../../components/Horizontal'
import Text from '../../components/Text'
import Line from '../../components/Line'


function SelectedPomodoro({ obj }) {

    const countToDo = obj.toDoList.length
    let countToDoCompleted = 0
    obj.toDoList.forEach(obj => obj.done ? ++countToDoCompleted : false)


    return (
        <Horizontal margin='0 16px'>
            <Text>Pomodoro: {`${obj.indicator} - ${obj.name}`}</Text>
            <Line />
            <Text nowrap>{`${countToDoCompleted} - ${countToDo}`}</Text>
        </Horizontal>
    )
}

export default SelectedPomodoro
