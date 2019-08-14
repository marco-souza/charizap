import styled from 'styled-components'

import { getPropsBackground, getFont } from 'app/helpers/theme'

import Container from './component'

export default styled(Container)`
  text-align: center;
  max-width: 480px;
  overflow: hidden;
  background-color: ${getPropsBackground()};

  @media (max-width: 960px) {
    display: none;
  }


  & img {
    margin: 0 auto;
    margin-top: 60px;

    &:nth-child(2) {
      width: 100%;
      margin-top: 20px;
      margin-bottom: ${props => props.tittleUp ? -200 : -100}px;
    }
  }


  & > h5 {
    font-family: ${getFont('robotoMontserrat')};
    letter-spacing: .05em;
    padding: ${props => props.padding || 0} ${props => props.moreSpace ? 10 : 25}%;
  }
`
