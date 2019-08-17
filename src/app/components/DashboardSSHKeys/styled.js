import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

export const GridItem = styled(Grid)`
  display: flex;
  & > div {
    flex: 1;
  }
`
