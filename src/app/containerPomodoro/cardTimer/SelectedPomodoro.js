import React from 'react'
import Horizontal from '../../components/Horizontal'
import Text from '../../components/Text'
import Line from '../../components/Line'
import { useSelector } from 'react-redux'


function SelectedPomodoro() {

    const array = useSelector(state => state.pomodoros)

    const pomodoroSelected = array.find(obj => obj.selected)
    console.log(pomodoroSelected)

    return (
        <Horizontal margin='0 16px'>
            <Text>Pomodoro: {`${pomodoroSelected.indicator} - ${pomodoroSelected.name}`}</Text>
            <Line />
            <Text>0 - 3</Text>
        </Horizontal>
    )
}

export default SelectedPomodoro
