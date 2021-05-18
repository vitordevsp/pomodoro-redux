import React from 'react'
import { MdAdd } from 'react-icons/md'

import styled from 'styled-components'

import BtnIcon from './BtnIcon'

function InputAdd({ onClickAdd = () => {}, margin, ...props }) {
  return (
    <Container margin={margin}>
      <Input {...props} />

      <BtnIcon onClick={onClickAdd}>
        <MdAdd size="24" color="#303030" />
      </BtnIcon>
    </Container>
  )
}

const Container = styled.div`
  margin: ${({ margin = '0' }) => margin};
  padding: 4px 10px;
  border-radius: 30px;
  background-color: #ffffff;
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
