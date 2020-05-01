import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Horizontal from '../../components/Horizontal'
import BtnIcon from '../../components/BtnIcon'
import { MdEdit } from 'react-icons/md'
// import { MdDone } from 'react-icons/md'


function Timer() {
    return (
        <Container>
            <Horizontal margin='0 0 20px 80px' position='relative'>
                <h1>25:00</h1>
                <BtnIcon margin='0 0 0 26px' icon={<MdEdit size='24' />} />
                {/* <BtnIcon margin='0 0 0 26px' icon={<MdDone size='24' />} /> */}
            </Horizontal>

            <Horizontal>
                <Button text='INICIAR' background='#4EB089' color='white' />
                <Button text='PARAR' />
            </Horizontal>
        </Container>
    )
}

const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        color: #343434;
        font-family: monospace; 
        font-size: 44px;
        cursor: default;
    }
`

export default Timer
