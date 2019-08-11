import styled from 'styled-components'

import { getPropsBackground } from 'app/helpers/theme'

const Card = styled.div`
  padding: 30px 20px;
  border: 1px solid ${getPropsBackground('stroke')};
  border-radius: 10px 10px;
`

export default Card
