import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Horizontal from '../../components/Horizontal'
import BtnIcon from '../../components/BtnIcon'
import { MdEdit } from 'react-icons/md' // MdDone


function Timer() {
    return (
        <Container>
            <Horizontal margin='0 0 20px 80px' position='relative'>
                <h2>25:00</h2>

                <BtnIcon margin='0 0 0 26px' width='36px' height='36px' background='#F5F5F5' shadow>
                    <MdEdit size='24' />
                </BtnIcon>

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
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h2 {
        color: #343434;
        font-family: monospace; 
        font-size: 44px;
        cursor: default;
    }
`

export default Timer
