import React from 'react'
import Horizontal from '../../components/Horizontal'
import Text from '../../components/Text'

function CounterPomodoro({ array }) {
  const countPomodoro = array.length
  let countPomodoroCompleted = 0
  array.forEach((obj) => (obj.completed ? ++countPomodoroCompleted : false))

  return (
    <Horizontal margin="20px" justify="space-between">
      <Text>Objetivo diario: </Text>
      <Text nowrap>
        {`${countPomodoroCompleted} - ${countPomodoro}`}
      </Text>
    </Horizontal>
  )
}

export default CounterPomodoro
