import React from 'react'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import Container from './components/generics/Container'
import Card from './components/generics/Card'


function App() {
    return (
        <>
            <Header />
            <Container>
                <Card />
                <Card />
            </Container>

            <GlobalStyle />
        </>
    )
}


export default App
