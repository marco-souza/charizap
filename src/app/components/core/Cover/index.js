import styled from 'styled-components'

import { getPropsBackground, getFont, getColor } from 'app/helpers/theme'

import Container from './component'

export default styled(Container)`
  text-align: center;
  max-width: inherit;
  max-height: 1200px;
  overflow: hidden;
  background-color: ${getPropsBackground()};

  @media (max-width: 960px) {
    display: none;
  }

 /* Not Proud */
  @media (max-width: 2000px) {
    & > h5 {font-size: 217%;}
  }
  @media (max-width: 1900px) {
    & > h5 {font-size: 189%;}
  }
   @media (max-width: 1417px) {
    & > h5 {font-size: 166%;}
  }
  @media (max-width: 1242px) {
    & > h5 {font-size: 142%;}
  }
  @media (max-width: 1062px) {
    & > h5 {font-size: 121%;}
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
    letter-spacing: .09em;
    color: ${getColor('secondary')};
    padding: ${props => props.padding || 0} ${props => props.moreSpace ? 10 : 20}%;
  }
`
