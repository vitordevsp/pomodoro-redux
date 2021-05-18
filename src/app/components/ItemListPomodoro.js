import React, { useState } from 'react'
import styled from 'styled-components'
import { MdDeleteForever } from 'react-icons/md'

import Horizontal from './Horizontal'
import Text from './Text'
import BtnIcon from './BtnIcon'
import InputNoBorder from './InputNoBorder'

function ItemListPomodoro({
  icon: Icon,
  num,
  text,
  time,
  onSelect,
  onEdit,
  onDelete,
}) {
  const [openEdit, setOpenEdit] = useState(false)
  const [value, setValue] = useState(text)

  const clickEdit = () => setOpenEdit(true)

  const onChange = (e) => setValue(e.target.value)

  const onBlur = () => {
    onEdit(value)
    setOpenEdit(false)
  }

  return (
    <Card
      onClick={onSelect}
      name="cardItem"
      className="teste"
      padding="0 12px"
      justify="space-between"
    >
      <Horizontal width="100%">
        {Icon && <Icon />}

        <Text margin="0 8px 0 12px" nowrap>{`${num} - `}</Text>

        {onEdit && openEdit ? (
          <InputNoBorder
            width="75%"
            placeholder="Pomodoro"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            autoFocus
          />
        ) : (
          <Text onClick={clickEdit} cursor="text">
            {text}
          </Text>
        )}
      </Horizontal>

      {time && (
        <Text className="none" weight="300" size="1em">
          {time}
        </Text>
      )}

      {onDelete && (
        <ContainerBtnDel className="hide">
          <BtnIcon name="btnDel" onClick={onDelete}>
            <MdDeleteForever size="24" color="#303030" />
          </BtnIcon>
        </ContainerBtnDel>
      )}
    </Card>
  )
}

const Card = styled.div`
  height: 44px;
  border-radius: 10px;
  background: #ffffff;

  padding: ${({ padding = '0' }) => padding};
  margin: ${({ margin = '0 0 12px' }) => margin};

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 3px 3px 0.5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  overflow: hidden;
  position: relative;

  .hide {
    position: absolute;
    transition: right 300ms ease-in;
    right: -40px;

    &:hover {
      right: 8px;
    }
  }

  .none {
    transition: opacity 400ms ease;

    &:hover {
      opacity: 0;
    }
  }
`

const ContainerBtnDel = styled.div`
  button svg {
    transition: fill 500ms ease-out;

    &:hover {
      fill: #b50000;
    }
  }
`

export default ItemListPomodoro
