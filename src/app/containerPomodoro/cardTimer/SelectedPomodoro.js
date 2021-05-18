import React from 'react'

import Horizontal from '../../components/Horizontal'
import Line from '../../components/Line'
import Text from '../../components/Text'

function SelectedPomodoro({ obj }) {
  const countToDo = obj.toDoList.length
  let countToDoCompleted = 0

  obj.toDoList.forEach((toDo) => (toDo.done ? ++countToDoCompleted : false))

  return (
    <Horizontal margin="0 16px">
      <Text>
        Pomodoro:
        {`${obj.indicator} - ${obj.name}`}
      </Text>

      <Line />

      <Text nowrap>{`${countToDoCompleted} - ${countToDo}`}</Text>
    </Horizontal>
  )
}

export default SelectedPomodoro
