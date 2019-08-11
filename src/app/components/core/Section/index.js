import styled from 'styled-components'

import { getPropsBackground } from 'app/helpers/theme'

import Container from './component'

export default styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;

  h6 {
    flex: 1;
    padding: 10px 0;
    font-weight: bold;
  }

  & .card {
    flex: 11;
    background-color: ${getPropsBackground('white')};
    display: flex;
    position: relative;
  }
`
