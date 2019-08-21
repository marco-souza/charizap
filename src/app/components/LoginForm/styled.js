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
    margin: 64px 0px 0px;

    ${mediaQueryUpTo('xLarge', `margin: 42px 0px 0px;`)}
  }

  & form {
    margin-top: 70px;
    ${mediaQueryUpTo('xSmall', `margin-top: 45px;`)}
  }

  & div {
    margin-left: 0px;
  }

  &&& {
    font-size: 1.3em;
    ${mediaQueryUpTo('xLarge', `font-size: 22px;`)}
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
    ${mediaQueryUpTo('xLarge', `
      font-size: 32px;
      margin-right: 25%;
    `)}
    ${mediaQueryUpTo('medium', `margin-right: 0%;`)}
    ${mediaQueryUpTo('xxSmall', `font-size: 28px`)}
  }
`
