import React, { useState } from 'react'
import styled from 'styled-components'
import {
  MdCheckBoxOutlineBlank, MdCheckBox, MdArrowDropDown, MdDeleteForever,
} from 'react-icons/md'

import Horizontal from '../../../components/Horizontal'
import Text from '../../../components/Text'
import BtnIcon from '../../../components/BtnIcon'
import InputNoBorder from '../../../components/InputNoBorder'

function ItemList({
  indicator,
  text,
  checked,
  openModal,
  onEdit,
  onDelete,
  changeDone,
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
    <Horizontal margin="0 0 10px">
      <Card onClick={changeDone} padding="0 5px" cursor="pointer" selected={checked}>
        {checked
          ? <MdCheckBox size="26" color="#4EB089" />
          : <MdCheckBoxOutlineBlank size="26" color="#4EB089" />}
      </Card>

      <Card margin="0 8px" selected={checked}>
        <Text margin="0 6px 0 12px">
          {indicator}
        </Text>

        <BtnIcon onClick={openModal}>
          <MdArrowDropDown size="24" color="#303030" />
        </BtnIcon>
      </Card>

      <Card
        className="teste"
        width="100%"
        padding="0 4px 0 12px"
        justify="space-between"
        selected={checked}
        hidden
      >
        {(onEdit && !openEdit) ? (
          <Text onClick={clickEdit} scratched={checked} cursor="text">
            {text}
          </Text>
        ) : (
          <InputNoBorder
            placeholder="Tarefa"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            autoFocus
          />
        )}

        <ContainerbtnDel className="hide">
          <BtnIcon onClick={onDelete}>
            <MdDeleteForever size="24" color="#303030" />
          </BtnIcon>
        </ContainerbtnDel>
      </Card>
    </Horizontal>
  )
}

const Card = styled.div`
  width: ${({ width = 'initial' }) => width};
  height: 38px;
  border-radius: 6px;
  background: #FFFFFF;

  padding: ${({ padding = '0' }) => padding};
  margin: ${({ margin = '0' }) => margin};
  border: 2px solid ${({ selected }) => (selected ? '#4EB089' : '#FFFFFF')};

  display: flex;
  align-items: center;
  justify-content: ${({ justify = 'initial' }) => justify};

  box-shadow: 0px 2px 2px .5px rgba(0, 0, 0, 0.25);
  cursor: ${({ cursor = 'default' }) => cursor};
  position: relative;
  ${({ hidden }) => (hidden ? 'overflow: hidden;' : null)};

  .hide {
    position: relative;
    right: -40px;
    transition: right 300ms ease-in;
  }

  :hover .hide { right: 0; }
`

const ContainerbtnDel = styled.div`
  button svg { transition: fill 500ms ease-out; }
  :hover button svg { fill: #B50000; }
`

export default ItemList
