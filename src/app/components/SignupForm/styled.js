import styled from 'styled-components'

import CoreHeader from 'app/components/core/Header'
import { getFont, getColor, mediaQueryUpTo } from 'app/helpers/theme'

export const Container = styled.div`
  margin: 0 22%;
  text-align: center;
  margin-top: 40px;
  font-family: ${getFont('robotoDefault')};

  ${mediaQueryUpTo('medium', `margin: 0 3%`)}

  & button {
    width: 100%;
    margin: 42px 0px 30px 0px;
  }

  & form {
    margin-top: 70px;
    ${mediaQueryUpTo('xSmall', `margin-top: 45px;`)}
  }

  & div {
    margin-left: 0px;
  }

  &&& {
    font-size: 16px;
  }
`

export const Header = styled(CoreHeader)`
  margin: 0;
  margin-top: 7%;
  max-width: 100%;

  color: ${getColor('secondary')};

  &&& {
    font-size: 32px;
    margin-right: 0%

    ${mediaQueryUpTo('xSmall', `font-size: 22px;`)}
  }
`
