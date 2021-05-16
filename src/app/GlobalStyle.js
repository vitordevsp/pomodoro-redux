import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* personalizar a scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #e6e6e6; border-radius: 5px; }
  ::-webkit-scrollbar-thumb { background: rgb(151, 151, 151); border-radius: 5px; }
  ::-webkit-scrollbar-thumb:hover { background: rgb(99, 99, 99); }

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
