import React from 'react'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import ContainerPomodoro from './components/containerPomodoro'


function App() {
    return (
        <>
            <Header />
            <ContainerPomodoro />

            <GlobalStyle />
        </>
    )
}


export default App
