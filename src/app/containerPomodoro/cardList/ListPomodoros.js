import React from 'react'
import styled from 'styled-components'
import ItemList from './ItemList'


function ListPomodoros() {

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
            <ItemList num='#1' text='Prototipagem part 1' time='25:00' onSelect={onSelect} onDelete={onDelete} />
            <ItemList num='#2' text='Prototipagem part 2' time='25:00' onSelect={onSelect} onDelete={onDelete} />
            <ItemList num='#3' text='Prototipagem part 3' onSelect={onSelect} onDelete={onDelete} />
        </Container>
    )
}

const Container = styled.div`
    margin: 12px 24px;
    height: calc(100% - 130px);
`

export default ListPomodoros
