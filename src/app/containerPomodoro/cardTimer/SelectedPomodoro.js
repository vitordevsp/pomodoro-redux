import React from 'react'
import Horizontal from '../../components/Horizontal'
import TextInfo from '../../components/TextInfo'
import Line from '../../components/Line'


function SelectedPomodoro() {
    return (
        <Horizontal margin='0 16px'>
            <TextInfo>Tarefas:  #2 - Prototipagem part 2</TextInfo>
            <Line />
            <TextInfo>0 - 3</TextInfo>
        </Horizontal>
    )
}

export default SelectedPomodoro
