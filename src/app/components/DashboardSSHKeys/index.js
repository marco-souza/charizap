import styled from 'styled-components'

import Container from './component'

export default styled(Container)`
  padding: 0;
  position:relative;

  outline: none;

  & textarea:focus, input:focus{
    outline: none;
  }

  & *:focus {
    outline: none;
  }

  & > div {
    display: flex;
  }
`
