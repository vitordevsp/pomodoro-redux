import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../../components/Card'
import CounterPomodoro from './CounterPomodoro'
import InputAdd from '../../components/InputAdd'
import ListPomodoros from './ListPomodoros'
import { pomodoro } from '../../../store/actions'

function CardList() {
  const dispatch = useDispatch()
  const arrayPomodoros = useSelector((state) => state.pomodoros)

  const [newPomodoro, setNewPomodoro] = useState('')

  const onChange = (event) => setNewPomodoro(event.target.value)

  const onClickAdd = () => {
    if (newPomodoro !== '') {
      dispatch(pomodoro.add(`#${arrayPomodoros.length + 1}`, newPomodoro))
      setNewPomodoro('')
      document.getElementById('inputPomodoro').focus()
    }
  }

  return (
    <Card>
      <CounterPomodoro array={arrayPomodoros} />

      <InputAdd
        id="inputPomodoro"
        placeholder="Novo Pomodoro: "
        value={newPomodoro}
        onChange={onChange}
        onClickAdd={onClickAdd}
        margin="0 24px 18px"
      />

      <ListPomodoros array={arrayPomodoros} />
    </Card>
  )
}

export default CardList
