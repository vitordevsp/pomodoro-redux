import styled from 'styled-components'

const Card = styled.section`
  background: #eeeef6;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  margin: ${({ margin = '0 10px' }) => margin};
`

export default Card
