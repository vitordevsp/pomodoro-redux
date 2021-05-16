import styled from 'styled-components'

const Line = styled.div`
  ${({ width }) => (width ? `width: ${width};` : 'flex-grow: 1;')};
  height: 3px;
  border-radius: 10px;
  margin: 0 16px;
  background-color: #BEBEBE;
`

export default Line
