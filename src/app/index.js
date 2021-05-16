import React from 'react'
import { Provider } from 'react-redux'

import store from '../store'
import Header from './Header'
import ContainerPomodoro from './containerPomodoro'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <ContainerPomodoro />
      </Provider>

      <GlobalStyle />
    </>
  )
}

export default App
