import styled from 'styled-components'

import { getColor } from 'app/helpers/theme'

import Component from './component'

export default styled(Component)`
  /*TODO  check why it's not working and remove same config
  from BaseDialog Style */
  text-align: left;
  opacity: 0.7;
  color: ${getColor('secondary')};
  cursor: pointer;

  & svg {
    padding-right: 15px;
  }
`
