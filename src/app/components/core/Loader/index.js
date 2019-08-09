import styled from 'styled-components'

import { getPropsBackground } from 'app/helpers/theme'

import Component from './component'

export default styled(Component)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${getPropsBackground('secondaryVariant')};

  & > div {
    margin: 40vh auto;
    text-align: center;

    & > img {
      margin: 0 auto;
      transform: scale(.5);
    }
  };
`
