import React, { useState } from 'react'
import Card from '../../components/Card'
import CounterPomodoro from './CounterPomodoro'
import InputAdd from '../../components/InputAdd'


function CardList() {

    const [newPomodoro, setNewPomodoro] = useState('')

    const onChange = event => setNewPomodoro(event.target.value)

    const onClickAdd = () => {
        console.log(newPomodoro)
    }

    return (
        <Card>
            <CounterPomodoro />            
            <InputAdd placeholder='Novo Pomodoro: ' value={newPomodoro} onChange={onChange} onClickAdd={onClickAdd} margin='0 24px' />
        </Card>
    )
}


export default CardList
