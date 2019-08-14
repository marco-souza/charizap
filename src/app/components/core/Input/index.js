import styled from 'styled-components'

import { getPropsColor, getPropsBackground, getFont } from 'app/helpers/theme'
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
    color: ${getPropsColor('secondary')};
    border: 1px solid ${getPropsBackground('stroke')};
    background: ${getPropsBackground()};
    font-size: .8em;
    border-radius: 20px 20px;
    padding: 10px 20px;

    &:hover, &:focus {
      border-color: ${getPropsBackground('primary')};
    }

    &::placeholder {
      color: ${getPropsColor('secondaryVariant')};
    }
  }

  ${removeBlueMark}
`
