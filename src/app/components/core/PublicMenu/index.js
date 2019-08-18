import styled from 'styled-components'

import Component from './component'

export default styled(Component)`
  margin-right: 3%;

  @media (max-width: 960px) {
    margin-left: 3%;
  }

  & button {
    margin-left: 15px;
  }
`
