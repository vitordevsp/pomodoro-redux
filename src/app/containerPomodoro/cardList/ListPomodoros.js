import React from 'react'
import styled from 'styled-components'
import ItemList from './ItemList'
// import { useDispatch } from 'react-redux'
// import { pomodoro } from '../../../store/actions'


function ListPomodoros({ array }) {

    // const dispatch = useDispatch()

    const onSelect = (event, obj) => {
        console.log('---onSelect---')
        console.log(event.currentTarget.getAttribute('name'))
        console.log(obj)
    }

    const onDelete = (event, obj) => {
        console.log('---onDelete---')
        console.log(event.currentTarget.getAttribute('name'))
        console.log(obj)
    }


    return (
        <Container>
            {array && array.map(obj => (
                <ItemList key={obj.indicator} num={obj.indicator} text={obj.name} time={obj.time}
                    onSelect={(event) => onSelect(event, obj)} onDelete={(event) => onDelete(event, obj)} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    margin: 12px 24px;
    height: calc(100% - 130px);
`

export default ListPomodoros
