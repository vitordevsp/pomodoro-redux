import styled from 'styled-components'


const Text = styled.h3`
    white-space: nowrap;
    color: #383838;
    margin: ${({ margin = '0' }) => margin};
    text-decoration: ${({ scratched }) => scratched ? 'line-through' : 'initial'};
`

export default Text
