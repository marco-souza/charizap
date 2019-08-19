import styled from 'styled-components'

import CoreHeader from 'app/components/core/Header'
import { getFont, getColor, mediaQueryUpTo } from 'app/helpers/theme'

export const Container = styled.div`
  margin: 0 22%;
  text-align: center;
  margin-top: 40px;
  font-family: ${getFont('robotoDefault')};

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
  margin-top: 7%;
  margin-right: 35%;
  max-width: 100%;

  &&& {
    font-size: 46px;
    ${mediaQueryUpTo('xLarge', `font-size: 32px;`)}
  }
`
