import styled from 'styled-components'

import { mediaQueryUpTo } from 'app/helpers/theme'

import Component from './component'

export default styled(Component)`
  margin-right: 3%;

  @media (max-width: 960px) {
    margin-left: 3%;
  }

  & button {
    margin-left: 15px;
  }

  & span {
    font-size: 20px;
  }

  ${mediaQueryUpTo('xLarge', `
    & span {
      font-size: 16px;
    }
  `)}

`
