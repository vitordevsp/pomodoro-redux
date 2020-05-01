import React from 'react'
import styled from 'styled-components'


function Timer() {
    return (
        <Container>
            <h1>25:00</h1>
        </Container>
    )
}

const Container = styled.div`
    
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1 {
        font-family: monospace; 
        font-size: 40px;
    }
`

export default Timer
