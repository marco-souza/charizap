import styled from 'styled-components'

import Component from './component'

export default styled(Component)`
  padding: 40px 0;
  width: 100%;
  vertical-align: center;
  
  & > .leftSide {
    float: left;
  }

  & > .rightSide {
    float: right;

  }
`
