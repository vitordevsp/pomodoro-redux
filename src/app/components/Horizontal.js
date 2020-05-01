import styled from 'styled-components'


const Horizontal = styled.div`
    display: flex;
    align-items: ${({ align = 'center' }) => align};
    justify-content: ${({ justify = 'initial' }) => justify};
    margin:  ${({ margin = '0' }) => margin};
`

export default Horizontal
