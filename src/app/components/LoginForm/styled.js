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

  & h1 {
    margin-top: 7%;
    margin-right: 35%;
    max-width: 100%;
    font-size: 36px;
    @media (max-width: 960px) {
      font-size: 18px;
    }
  }

`

export const Header = styled(CoreHeader)`
  margin: 0;
  color: ${getColor('secondary')};

  &&& {
    font-size: 46px;
    ${mediaQueryUpTo('xxLarge', `font-size: 32px;`)}
  }
`
