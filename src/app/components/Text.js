import styled from 'styled-components'

const Text = styled.h3`
  color: #383838;
  ${({ nowrap }) => (nowrap ? 'white-space: nowrap;' : null)};
  margin: ${({ margin = '0' }) => margin};
  font-size: ${({ size = '1.17em' }) => size};
  font-weight: ${({ weight = '500' }) => weight};
  text-decoration: ${({ scratched }) =>
    scratched ? 'line-through' : 'initial'};
  cursor: ${({ cursor = 'default' }) => cursor};
`

export default Text
