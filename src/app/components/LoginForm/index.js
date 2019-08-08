import styled from 'styled-components'

import Component from './component'

export default styled(Component)`
  max-width: 430px;
  margin: 0 auto;
  text-align: center;

  & button {
    width: 100%;
    margin: 20px 0;
  }

  & form {
    margin-top: 70px;
  }
`
