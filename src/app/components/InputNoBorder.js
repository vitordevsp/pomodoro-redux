import styled from 'styled-components'


const InputNoBorder = styled.input`
    width: ${({ width = '88%' }) => width};
    border: none;
    color: #383838;
    font-weight: 500;
    font-size: 1.17em;
`

export default InputNoBorder
