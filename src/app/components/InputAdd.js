import React from 'react'
import styled from 'styled-components'
import { MdAdd } from 'react-icons/md'
import BtnIcon from './BtnIcon'


function InputAdd({ onClickAdd = () => { }, ...props }) {
    return (
        <Container>
            <Input {...props} />
            <BtnIcon onClick={onClickAdd}> <MdAdd size='24' color='#303030' /> </BtnIcon>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 30px;
    padding: 4px 10px;
    display: flex;
    align-items: center;
`

const Input = styled.input`
    width: 100%;
    margin: 0 10px;
    font-size: 18px;
    border: none;
    outline: none;
    color: #303030;
`

export default InputAdd
