import React from 'react'
import { MdTimer } from 'react-icons/md'

import styled from 'styled-components'

function Header() {
  return (
    <HeaderStyle>
      <MdTimer size="42px" color="#2B815F" />
      <h1 className="title">Pomodoro</h1>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  height: 68px;
  padding: 0 20px;
  background: #eeeef6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-left: 20px;
    color: #2b815f;
    font-family: 'Courgette', cursive;
  }
`

export default Header
