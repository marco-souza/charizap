import styled from 'styled-components'

import Component from './component'

export default styled(Component)`
  text-align: center;
  max-width: 420px;

  @media (max-width: 600px) {
    display: none;
  }

  & > div {
    background-color: #786efe;
  }

  & img {
    margin: 0 auto;
    margin-top: 80px;

    &:nth-child(2) {
      width: 100%;
      margin-top: 0px;
      margin-bottom: -250px;
    }
  }


  & > h5 {
    font-family: 'Roboto-light';
    letter-spacing: .05em;
    padding: 0 25%;
  }
`
