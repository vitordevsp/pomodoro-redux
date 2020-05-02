import React from 'react'
import Horizontal from '../../components/Horizontal'
import Text from '../../components/Text'


function CounterPomodoro() {
    return (
        <Horizontal margin='20px' justify='space-between'>
            <Text>Objetivo diario: </Text>
            <Text>0 - 3</Text>
        </Horizontal>
    )
}

export default CounterPomodoro
