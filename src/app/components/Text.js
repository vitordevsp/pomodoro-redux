import styled from 'styled-components'


const Text = styled.h3`
    color: #383838;
    white-space: nowrap;
    margin: ${({ margin = '0' }) => margin};
    font-size: ${({ size = '1.17em' }) => size};
    font-weight: ${({ weight = '500' }) => weight};
    text-decoration: ${({ scratched }) => scratched ? 'line-through' : 'initial'};
`

export default Text
