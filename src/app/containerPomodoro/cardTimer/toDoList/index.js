import React, { useState } from 'react'
import styled from 'styled-components'
import InputAdd from '../../../components/InputAdd'
import ItemList from './ItemList'
import { useDispatch } from 'react-redux'
import { toDoList } from '../../../../store/actions'


function ToDoList({ obj }) {

    const dispatch = useDispatch()

    const [newTask, setNewTask] = useState('')

    const onChange = event => setNewTask(event.target.value)

    const onClickAdd = () => {
        if (newTask !== '') {
            dispatch(toDoList.add(obj.indicator, newTask))
            setNewTask('')
            document.getElementById('inputTask').focus()
        }
    }

    const onDelete = (indexTask) => {
        const response = window.confirm('Excluir a Tarefa ?')
        if (!response) return

        dispatch(toDoList.del(obj.indicator, indexTask))
    }

    const changeDone = (indexTask) => {
        dispatch(toDoList.change(obj.indicator, indexTask))
    }


    return (
        <Container>
            <InputAdd id='inputTask' placeholder='Nova Tarefa: ' value={newTask} onChange={onChange} onClickAdd={onClickAdd} />

            {obj.toDoList.map((objToDo, index) => (
                <ItemList key={index} indicator={objToDo.indicator} text={objToDo.name} checked={objToDo.done}
                    onDelete={() => onDelete(index)} changeDone={() => changeDone(index)} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    margin: 12px 24px;
    height: calc(100% - 216px);
`

export default ToDoList
