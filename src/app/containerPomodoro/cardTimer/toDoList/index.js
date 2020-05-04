import React, { useState } from 'react'
import styled from 'styled-components'
import InputAdd from '../../../components/InputAdd'
import ItemList from './ItemList'


function ToDoList({ obj }) {

    const [newTask, setNewTask] = useState('')

    const onChange = event => setNewTask(event.target.value)

    const onClickAdd = () => {
        console.log(newTask)
    }

    return (
        <Container>
            <InputAdd placeholder='Nova Tarefa: ' value={newTask} onChange={onChange} onClickAdd={onClickAdd} />

            {obj.toDoList.map((objToDo, index) => (
                <ItemList key={index} indicatorPomodoro={objToDo.indicator} text={objToDo.name} checked={objToDo.done} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    margin: 12px 24px;
    height: calc(100% - 216px);
`

export default ToDoList
