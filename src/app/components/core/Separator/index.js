import styled from 'styled-components'

import { getPropsBackground } from 'app/helpers/theme'

const Card = styled.div`
  background-color: ${getPropsBackground('stroke')};
  height: 1px;
  width: 100%;
  margin: 30px 0;
`

export default Card
