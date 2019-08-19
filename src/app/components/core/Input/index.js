import styled from 'styled-components'

import {
  getColor,
  getPropsColor,
  getPropsBackground,
  mediaQueryUpTo,
  getFont,
} from 'app/helpers/theme'
import { removeBlueMark } from 'app/helpers/styles'

import Component from './component'

const adaptFontSize = mediaQueryUpTo('xLarge', `
  font-size: 16px;
`)

export default styled(Component)`
  display: flex;
  flex-direction: column;
  font-family: ${getFont('robotoDefault')};
  text-align: left;

  font-size: 24px;
  ${adaptFontSize}

  & label {
    color: ${getPropsColor('secondary')};
    padding: 15px 0 10px;
  }

  & input {
    color: ${getColor('secondary')};
    border: 2px solid ${({ hasError }) => getColor(!hasError ? 'stroke' : 'error')};
    background: ${({ hasError }) => getColor(!hasError ? 'background' : 'stroke')};

    font-size: 24px;
    ${adaptFontSize}

    border-radius: 30px 30px;
    padding: 10px 20px;

    &:hover, &:focus {
      border-color: ${({ hasError }) => !hasError && getPropsBackground('primary')};
    }

    &::placeholder {
      color: ${({ hasError }) => getColor(!hasError ? 'secondaryVariant' : 'white')};
    }
  }

  ${removeBlueMark}
`
