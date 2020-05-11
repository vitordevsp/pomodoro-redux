import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import Card from '../../../components/Card'
import Horizontal from '../../../components/Horizontal'
import BtnIcon from '../../../components/BtnIcon'
import Text from '../../../components/Text'


function ModalEditTimer({ closeModal }) {
    return (
        <Modal>
            <Card width='400px' height='200px'>
                <Horizontal margin='12px 16px 18px'>
                    <BtnIcon width='40px' height='40px' onClick={closeModal}> <MdClose size='28' color='#303030' /> </BtnIcon>

                    <Text size='1.4em' weight='700' margin='0 16px'>Editar tempo</Text>
                </Horizontal>

                <div style={{ margin: '0 16px' }}>
                    <Horizontal margin='0 0 12px'>
                        <Text>Pomodoro:</Text>
                        <Input type="number" autoFocus />
                    </Horizontal>

                    <Horizontal>
                        <Text>Descanso:</Text>
                        <Input type="number" mf='15px' />
                    </Horizontal>
                </div>
            </Card>
        </Modal>
    )
}

const Modal = styled.section`
    background-color: rgba(0, 0, 0, .5);
    position: absolute; z-index: 10;
    top: 0; right: 0; bottom: 0; left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    padding: 4px 10px;
    margin-left: ${({ mf = '10px' }) => mf};
    width: 100%;
    color: #383838;
    font-weight: 500;
    font-size: 1.20em;
`

export default ModalEditTimer
