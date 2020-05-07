import React from 'react'
import ItemList from './ItemList'
import { useDispatch } from 'react-redux'
import { pomodoro } from '../../../store/actions'
import { MdCheckCircle, MdArrowForward, MdTimer } from 'react-icons/md'
import ContainerList from '../../components/ContainerList'


function ListPomodoros({ array }) {

    const dispatch = useDispatch()

    const selectIcon = obj => {
        if (obj.selected) return <MdArrowForward size='24' color='#004678' />

        if (obj.completed) return <MdCheckCircle size='24' color='#4EB089' />

        return <MdTimer size='24' color='#383838' />
    }

    const onSelect = (event, obj) => {
        // console.log(event.currentTarget.getAttribute('name'))
        dispatch(pomodoro.select(obj.indicator))
    }

    const onDelete = obj => {
        const response = window.confirm('Excluir o Pomodoro ?')
        if (!response) return

        dispatch(pomodoro.del(obj.indicator))
    }


    return (
        <ContainerList height='calc(100% - 130px)' >
            {array && array.map((obj, index) => (
                <ItemList key={obj.indicator} icon={() => selectIcon(obj)} num={obj.indicator} text={obj.name} time={obj.time}
                    onSelect={(event) => onSelect(event, obj)}
                    onDelete={(index !== 0) ? () => onDelete(obj) : undefined} /> // tirando o btn de del do primeiro pomodoro
            ))}
        </ContainerList >
    )
}


export default ListPomodoros
