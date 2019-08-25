import styled from 'styled-components'

import { getPropsBackground, getFont, getColor, mediaQueryUpTo } from 'app/helpers/theme'

import Container from './component'

export default styled(Container)`
  text-align: center;
  max-width: 502px;
  overflow: hidden;
  height: 100${props => props.tittleUp ? '%' : 'vh'};
  background-color: ${getPropsBackground()};

  @media (max-width: 960px) {
    display: none;
  }

  & h5 {
    font-size: 30px;
    ${mediaQueryUpTo('xLarge', `font-size: 25px;`)}
  }

  & img {
    margin: 0 auto;
    margin-top: 60px;

    &:nth-child(2) {
      width: 100%;
      margin-top: 120px;
      margin-bottom: ${props => props.tittleUp ? -200 : 0}px;
    }
  }


  & > h5 {
    font-family: ${getFont('robotoMontserrat')};
    letter-spacing: .09em;
    color: ${getColor('secondary')};
    padding: ${props => props.padding || 0} ${props => props.moreSpace ? 10 : 20}%;
  }
`
