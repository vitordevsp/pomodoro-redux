import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    
    html, body, #root { 
        height: 100%;
        overflow: hidden;
        background-color: #E1E5EB;
    }
`

export default GlobalStyle