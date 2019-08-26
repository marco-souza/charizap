import styled from 'styled-components'

import { getPropsBackground, getFont, getColor, mediaQueryUpTo } from 'app/helpers/theme'

import Container from './component'

export default styled(Container)`
  text-align: center;
  max-width: 502px;
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
    margin-top: 40px;

    &:nth-child(2) {
      width: 100%;
      margin-top: 120px;
      margin-bottom: ${props => props.tittleUp ? -200 : 0}px;

      @media(max-height: 768px) {
        margin-bottom: ${props => props.tittleUp ? -250 : -100}px;
        margin-top: 40px;
      }

      @media(max-width: 1024px) {
        margin-bottom: ${props => props.tittleUp ? -150 : -100}px;
        margin-top: 40px;
      }
    }
  }


  & > h5 {
    font-family: ${getFont('robotoMontserrat')};
    letter-spacing: .09em;
    color: ${getColor('secondary')};
    padding: ${props => props.padding || 0} ${props => props.moreSpace ? 10 : 20}%;
  }
`
