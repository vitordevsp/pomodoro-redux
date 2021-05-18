import React from 'react'
import { MdClose, MdArrowForward } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'

import { toDoList } from '../../../../store/actions'
import BtnIcon from '../../../components/BtnIcon'
import Card from '../../../components/Card'
import ContainerList from '../../../components/ContainerList'
import Horizontal from '../../../components/Horizontal'
import ItemListPomodoro from '../../../components/ItemListPomodoro'
import Text from '../../../components/Text'

function ModalSelectPomodoro({ selectedObject, closeModal }) {
  const { indicatorPomodoro, indexTask, objTask } = selectedObject

  const array = useSelector((state) => state.pomodoros)
  const dispatch = useDispatch()

  const selectIcon = (obj) => {
    if (obj.selected) return <MdArrowForward size="24" color="#004678" />

    return <MdArrowForward size="24" color="white" />
  }

  const onSelect = (obj) => {
    const newIndicator = obj.indicator
    dispatch(
      toDoList.moving(indicatorPomodoro, indexTask, objTask, newIndicator),
    )
    closeModal()
  }

  return (
    <Modal>
      <Card width="600px" height="80%">
        <Horizontal margin="12px 16px 18px">
          <BtnIcon width="40px" height="40px" onClick={closeModal}>
            <MdClose size="28" color="#303030" />
          </BtnIcon>

          <Text size="1.4em" weight="700" margin="0 16px">
            Mudar tarefa de Pomodoro
          </Text>
        </Horizontal>

        <ContainerList height="calc(100% - 85px)">
          {array &&
            array.map((obj) => (
              <ItemListPomodoro
                key={obj.indicator}
                icon={() => selectIcon(obj)}
                num={obj.indicator}
                text={obj.name}
                onSelect={() => onSelect(obj)}
              />
            ))}
        </ContainerList>
      </Card>
    </Modal>
  )
}

const Modal = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  div[name='cardItem'] svg {
    transition: fill 500ms ease;
  }
  div[name='cardItem']:hover svg {
    fill: #199110;
  }
`

export default ModalSelectPomodoro
