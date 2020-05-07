import styled from 'styled-components'


const Horizontal = styled.div`
    display: flex;
    width: ${({ width = 'initial' }) => width};
    margin: ${({ margin = '0' }) => margin};
    align-items: ${({ align = 'center' }) => align};
    justify-content: ${({ justify = 'initial' }) => justify};
`

export default Horizontal
