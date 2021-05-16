import React from 'react'
import styled from 'styled-components'

import CardTimer from './cardTimer'
import CardList from './cardList'

function ContainerPomodoro() {
  return (
    <Container>
      <CardTimer />
      <CardList />
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  max-width: 1300px;
  height: calc(100% - 68px);
  margin: auto;
  padding: 20px;
`

export default ContainerPomodoro
