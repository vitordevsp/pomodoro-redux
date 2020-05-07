import React, { useState } from 'react'
import InputAdd from '../../../components/InputAdd'
import ItemList from './ItemList'
import { useDispatch } from 'react-redux'
import { toDoList } from '../../../../store/actions'
import ContainerList from '../../../components/ContainerList'
import ModalSelectPomodoro from './ModalSelectPomodoro'


function ToDoList({ obj }) {

    const dispatch = useDispatch()

    // --------- input add ---------
    const [newTask, setNewTask] = useState('')

    const onChange = event => setNewTask(event.target.value)

    const onClickAdd = () => {
        if (newTask !== '') {
            dispatch(toDoList.add(obj.indicator, newTask))
            setNewTask('')
            document.getElementById('inputTask').focus()
        }
    }

    // --------- to Do List ---------
    const changeDone = (indexTask) => {
        dispatch(toDoList.change(obj.indicator, indexTask))
    }

    const onEdit = (indexTask, newNameTask) => {
        if (obj.toDoList[indexTask].name === newNameTask) return
        dispatch(toDoList.edit(obj.indicator, indexTask, newNameTask))
    }

    const onDelete = (indexTask) => {
        const response = window.confirm('Excluir a Tarefa ?')
        if (!response) return

        dispatch(toDoList.del(obj.indicator, indexTask))
    }

    // --------- Modal Select Pomodoro ---------
    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = () => setModalOpen(false)

    const [selectedObject, setSelectedObject] = useState({ indicatorPomodoro: '', indexTask: 0, objTask: {} })

    const openModal = (indexTask, objTask) => {
        const indicatorPomodoro = obj.indicator
        setSelectedObject({ indicatorPomodoro, indexTask, objTask })
        setModalOpen(true)
    }


    return (
        <>
            <InputAdd id='inputTask' placeholder='Nova Tarefa: ' value={newTask} onChange={onChange} onClickAdd={onClickAdd} margin='12px 24px' />

            <ContainerList height='calc(100% - 265px)'>
                {obj.toDoList.map((objTask, index) => (
                    <ItemList key={`${index}+${objTask.indicator}`} indicator={objTask.indicator} text={objTask.name} checked={objTask.done}
                        changeDone={() => changeDone(index)}
                        openModal={() => openModal(index, objTask)}
                        onEdit={newNameTask => onEdit(index, newNameTask)}
                        onDelete={() => onDelete(index)}
                    />
                ))}
            </ContainerList>

            {modalOpen && <ModalSelectPomodoro selectedObject={selectedObject} closeModal={closeModal} />}
        </>
    )
}


export default ToDoList
