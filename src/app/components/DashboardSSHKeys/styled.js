import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import { getColor } from 'app/helpers/theme'

export const GridItem = styled(Grid)`
  display: flex;
  & > div {
    flex: 1;
  }

  & textarea, input {
    background: ${getColor('white')};
  }
`
