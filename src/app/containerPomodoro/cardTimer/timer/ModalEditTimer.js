import React, { useState } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

import Card from '../../../components/Card'
import Horizontal from '../../../components/Horizontal'
import BtnIcon from '../../../components/BtnIcon'
import Text from '../../../components/Text'

function ModalEditTimer({
  closeModal,
  objTimer,
  defineObjTimer,
  convertTimer,
}) {
  const [timer, setTimer] = useState(() => {
    const { min: pomodoro } = convertTimer.int(objTimer.pomodoro)
    const { min: rest } = convertTimer.int(objTimer.rest)

    return { pomodoro, rest }
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setTimer({ ...timer, [name]: value })
  }

  const generateObjTime = () => {
    const pomodoro = convertTimer.string(timer.pomodoro, 0)
    const rest = convertTimer.string(timer.rest, 0)

    return { pomodoro, rest }
  }

  const closeModalEditTimer = () => {
    const { pomodoro, rest } = generateObjTime()

    if (objTimer.pomodoro !== pomodoro || objTimer.rest !== rest) defineObjTimer(pomodoro, rest)

    closeModal()
  }

  return (
    <Modal>
      <Card width="400px" height="200px">
        <Horizontal margin="12px 16px 18px">
          <BtnIcon width="40px" height="40px" onClick={closeModalEditTimer}>
            <MdClose size="28" color="#303030" />
          </BtnIcon>

          <Text size="1.4em" weight="700" margin="0 16px">Editar tempo</Text>
        </Horizontal>

        <div style={{ margin: '0 16px' }}>
          <Horizontal margin="0 0 12px">
            <Text>Pomodoro:</Text>
            <Input value={timer.pomodoro} name="pomodoro" onChange={onChange} type="number" autoFocus />
          </Horizontal>

          <Horizontal>
            <Text>Descanso:</Text>
            <Input value={timer.rest} name="rest" onChange={onChange} type="number" mf="15px" />
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
