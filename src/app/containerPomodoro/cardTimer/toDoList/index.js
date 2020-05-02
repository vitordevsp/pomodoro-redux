import React, { useState } from 'react'
import styled from 'styled-components'
import InputAdd from '../../../components/InputAdd'


function ToDoList() {

    const [newTask, setNewTask] = useState('')

    const onChange = event => setNewTask(event.target.value)

    const onClickAdd = () => {
        console.log(newTask)
    }

    return (
        <Container>
            <InputAdd placeholder='Nova Tarefa: ' value={newTask} onChange={onChange} onClickAdd={onClickAdd} />
        </Container>
    )
}

const Container = styled.div`
    margin: 12px 24px;
    height: calc(100% - 216px);
`

export default ToDoList
