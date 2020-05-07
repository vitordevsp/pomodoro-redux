import React from 'react'
import { useDispatch } from 'react-redux'
import { MdCheckCircle, MdArrowForward, MdTimer } from 'react-icons/md'
import { pomodoro } from '../../../store/actions'
import ContainerList from '../../components/ContainerList'
import ItemListPomodoro from '../../components/ItemListPomodoro'


function ListPomodoros({ array }) {

    const dispatch = useDispatch()

    const selectIcon = obj => {
        if (obj.selected) return <MdArrowForward size='24' color='#004678' />

        if (obj.completed) return <MdCheckCircle size='24' color='#4EB089' />

        return <MdTimer size='24' color='#383838' />
    }

    const onSelect = obj => {
        dispatch(pomodoro.select(obj.indicator))
    }

    const onEdit = (obj, newName) => {
        if (obj.name === newName) return
        dispatch(pomodoro.edit(obj.indicator, newName))
    }

    const onDelete = obj => {
        const response = window.confirm('Excluir o Pomodoro ?')
        if (!response) return

        dispatch(pomodoro.del(obj.indicator))
    }


    return (
        <ContainerList height='calc(100% - 130px)' >
            {array && array.map((obj, index) => (
                <ItemListPomodoro key={obj.indicator} icon={() => selectIcon(obj)} num={obj.indicator} text={obj.name} time={obj.time}
                    onSelect={() => onSelect(obj)}
                    onEdit={(newName) => onEdit(obj, newName)}
                    onDelete={(index !== 0) ? () => onDelete(obj) : undefined} /> // tirando o btn de del do primeiro pomodoro
            ))}
        </ContainerList >
    )
}


export default ListPomodoros
