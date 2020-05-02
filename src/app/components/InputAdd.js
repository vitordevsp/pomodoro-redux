import React from 'react'
import styled from 'styled-components'
import { MdAdd } from 'react-icons/md'


function InputAdd({ onClickAdd = () => { }, ...props }) {
    return (
        <Container>
            <Input {...props} />
            <Btn onClick={onClickAdd}> <MdAdd size='24' color='#303030' /> </Btn>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 30px;
    padding: 4px;
    display: flex;
    align-items: center;
`

const Input = styled.input`
    width: 100%;
    margin: 0 14px;
    font-size: 18px;
    border: none;
    outline: none;
    color: #303030;
`

const Btn = styled.button`
    min-width: 32px;
    min-height: 32px;
    margin-right: 8px;
    border-radius: 50%;
    border: none;
    background: transparent;
    transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);
    cursor: pointer;

    :hover {
        background: rgba(50, 50, 50, .1);
        transform: scale(1.18);
    }
`

export default InputAdd
