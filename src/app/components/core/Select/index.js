import styled from 'styled-components'

import Component from './component'

import { getPropsColor, getPropsBackground, getFont } from 'app/helpers/theme'

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

  & select {
    resize: none;
    color: ${getPropsColor('secondary')};
    border: 1px solid ${getPropsBackground('stroke')};

    font-size: .8em;
    border-radius: 20px 20px;
    option {
      padding: 10px 20px;
    }

    &:hover, &:focus {
      border-color: ${getPropsBackground('primary')};
    }

    &::placeholder {
      color: ${getPropsColor('secondaryVariant')};
    }
  }
`
