import styled from 'styled-components'

const Block = styled.div`
  background: ${({ theme }) => theme.colors['primary']};
  color: ${({ theme }) => theme.colors['background']};
  font-size: 1em;
  padding: 3em;
  text-align: center;
`

export default Block
