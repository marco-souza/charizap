import styled from 'styled-components'

import Component from './component'

export default styled(Component)`
  text-align: center;
  max-width: 480px;

  @media (max-width: 600px) {
    display: none;
  }

  & > div {
    background-color: ${({ theme }) => theme.colors.background};
  }

  & img {
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 30px;

    &:nth-child(2) {
      width: 100%;
      height: 80%;
      margin-top: 100px;
      margin-bottom: -220px;
    }
  }

  & > h5 {
    font-family: ${({ theme }) => theme.fonts};
    letter-spacing: .05em;
    padding: 0 25%;
  }
`
