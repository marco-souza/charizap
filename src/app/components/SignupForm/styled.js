import styled from 'styled-components'

import CoreHeader from 'app/components/core/Header'
import { getFont, getColor, mediaQueryUpTo } from 'app/helpers/theme'

export const Container = styled.div`
  margin: 0 22%;
  text-align: center;
  margin-top: 40px;
  font-family: ${getFont('robotoDefault')};

  ${mediaQueryUpTo('medium', `
    margin: 0 3%
  `)}

  & button {
    width: 100%;
    margin: 64px 0px 0px;

    ${mediaQueryUpTo('xLarge', `margin: 42px 0px 0px;`)}
  }

  & form {
    margin-top: 30%;
    margin-top: 70px;
  }

  & div {
    margin-left: 0px;
  }

  &&& {
    font-size: 1.2em;
    ${mediaQueryUpTo('medium', `font-size: 1.1em;`)}
  }
`

export const Header = styled(CoreHeader)`
  margin: 0;
  margin-top: 7%;
  margin-right: 10%;
  max-width: 100%;

  color: ${getColor('secondary')};

  &&& {
    font-size: 46px;
    ${mediaQueryUpTo('xLarge', `font-size: 32px;`)}

    ${mediaQueryUpTo('xLarge', `margin-right: 5%;`)}
    ${mediaQueryUpTo('large', `margin-right: 0%;`)}
  }
`
