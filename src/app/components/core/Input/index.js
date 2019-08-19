import styled from 'styled-components'

import { getColor, getPropsColor, getPropsBackground, getFont } from 'app/helpers/theme'
import { removeBlueMark } from 'app/helpers/styles'

import Component from './component'

export default styled(Component)`
  display: flex;
  flex-direction: column;
  font-family: ${getFont('robotoDefault')};
  text-align: left;

  & label {
    color: ${getPropsColor('secondary')};

    font-size: .8em;
    padding: 10px 0;
  }

  & input {
    color: ${getColor('secondary')};
    border: 2px solid ${({ hasError }) => getColor(!hasError ? 'stroke' : 'error')};
    background: ${({ hasError }) => getColor(!hasError ? 'background' : 'stroke')};

    font-size: .8em;
    border-radius: 20px 20px;
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
