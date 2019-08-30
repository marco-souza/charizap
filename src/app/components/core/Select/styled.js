import styled from 'styled-components'
import Select from 'react-select'

import Sort from 'app/components/core/icons/Sort'
import { getColor, getFont, getPropsColor, getPropsBackground } from 'app/helpers/theme'
import { removeBlueMark } from 'app/helpers/styles'

export const ReactSelect = styled(Select)`
  font-family: ${getFont('robotoDefault')};

  .devopness__control, > div {
    border-radius: 20px 20px;
    overflow: hidden;
    padding: 0 10px;
    cursor: pointer;

    /* Adapt the colors based on primary prop */
    color: ${getPropsColor()};
    background: ${getPropsBackground()};
    border: 2px solid ${getPropsBackground('stroke')};

    &--is-focused,&:hover {
      border-color: ${getPropsColor()};
      box-shadow: none;
    }
  }

  .devopness__single-value {
    color: ${getColor('secondary')};
  }
  .devopness__control {
    box-shadow: none;

    &--menu-is-open {
      border-radius: 20px 20px 0 0;
      box-shadow: none;
    }
  }

  .devopness__option {
    color: ${getColor('secondary')};

    &--is-selected, &--is-focused {
      background-color: ${getPropsColor()};
      color: ${getColor('white')};
    }
    &--is-focused {
      opacity: 0.6;
    }
  }


  .devopness__menu {
    border-radius: 0 0 20px 20px;
    padding: 0;
    margin: 0;
    margin-top: -2px;
    border-color: ${getPropsColor()};
    border-top: none;
    box-shadow: none;
  }

  &&& input {
    ${removeBlueMark};
  }
`

export const Label = styled.label`
  color: ${getPropsColor('secondary')};

  padding: 10px 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${getFont('robotoDefault')};
  text-align: left;
`
export const SortIcon = styled(Sort)`
  color: ${getColor('secondaryVariant')};
`
