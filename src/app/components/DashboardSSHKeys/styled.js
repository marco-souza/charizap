import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import { getColor, getFont } from 'app/helpers/theme'

export const GridItem = styled(Grid)`
  display: flex;
  & > div {
    flex: 1;
  }

  & textarea, input {
    font-size: 16px;

    background: ${getColor('white')};
    font-family: ${getFont('robotoDefault')}
  }
`
