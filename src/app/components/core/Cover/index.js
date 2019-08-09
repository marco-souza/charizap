import styled from 'styled-components'

import { getPropsBackground } from 'app/helpers/theme'

import Container from './component'

export default styled(Container)`
  text-align: center;
  max-width: 480px;
  overflow: ${props => props.overflow && 'hidden'};

  @media (max-width: 1024px) {
    display: none;
  }

  & > div {
    background-color: ${getPropsBackground()};
  }

  & img {
    margin: 0 auto;
    margin-top: 60px;

    &:nth-child(2) {
      width: 100%;
      margin-top: 20px;
      margin-bottom: -220px;
    }
  }


  & > h5 {
    font-family: ${({ theme }) => theme.fonts};
    letter-spacing: .05em;
    padding: 0 25%;
  }
`
