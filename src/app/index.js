import React from 'react'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import ContainerPomodoro from './containerPomodoro'

import { Provider } from 'react-redux'
import store from '../store'


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
