import styled from 'styled-components'

import CoreHeader from 'app/components/core/Header'
import { getFont, getColor } from 'app/helpers/theme'

export const Container = styled.div`
  margin: 0 27%;
  text-align: center;
  margin-top: 40px;
  font-family: ${getFont('robotoDefault')};
  margin-right: 27%;
  size: 34px;

  & button {
    width: 100%;
    margin: 20px 0;
  }

  & form {
    margin-top: 70px;
  }

  & div {
    margin-left: 0px;
  }

`

export const Header = styled(CoreHeader)`
  margin: 0;
  color: ${getColor('secondary')};
`
