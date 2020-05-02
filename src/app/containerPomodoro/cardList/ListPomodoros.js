import React from 'react'
import styled from 'styled-components'
import ItemList from './ItemList'
import { useSelector } from 'react-redux'


function ListPomodoros() {

    const arrayPomodoros = useSelector(state => state.pomodoros)

    console.log(arrayPomodoros)

    const onSelect = (event) => {
        console.log('---onSelect---')
        console.log(event.currentTarget.getAttribute('name'))
    }

    const onDelete = (event) => {
        console.log('---onDelete---')
        console.log(event.currentTarget.getAttribute('name'))
    }


    return (
        <Container>
            {arrayPomodoros.map(obj => (
                <ItemList key={obj.indicator} num={obj.indicator} text={obj.name} time={obj.time}
                    onSelect={onSelect} onDelete={onDelete} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    margin: 12px 24px;
    height: calc(100% - 130px);
`

export default ListPomodoros
