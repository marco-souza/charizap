import styled from 'styled-components'

import { getColor } from 'app/helpers/theme'

const Link = styled.a`
  /* Adapt the colors based on primary prop */
  color: ${getColor('primary')};
  font-size: ${({ small }) => small ? '0.8em' : '1em'};
  text-decoration: none;

  &:hover, &:focus {
    color: ${getColor('secondary')}};
  }
`

export default Link
