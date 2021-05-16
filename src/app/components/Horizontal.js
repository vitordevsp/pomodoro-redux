import styled from 'styled-components'

const Horizontal = styled.div`
  width: ${({ width = 'initial' }) => width};
  margin: ${({ margin = '0' }) => margin};
  position: ${({ position = 'initial' }) => position};
  display: flex;
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'initial' }) => justify};
`

export default Horizontal
