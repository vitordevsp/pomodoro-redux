import styled from 'styled-components'

const ContainerList = styled.div`
  margin: ${({ margin = '0 20px' }) => margin};
  padding: ${({ padding = ' 0 4px' }) => padding};
  height: ${({ height = 'initial' }) => height};
  overflow-y: auto;
`

export default ContainerList
