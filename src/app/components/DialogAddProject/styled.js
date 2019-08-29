import styled from 'styled-components'
import CoreStep from 'app/components/core/MultiStepForm/Step'
import Text from 'app/components/core/Text'
import CoreButton from 'app/components/core/Button'

import { getColor, getFont } from 'app/helpers/theme'

export const Step = styled(CoreStep)`
  text-align: center;
  padding: 20px 100px;

  & img {
    width: 50%;
    padding: 20px 0;
  }
`
export const SubText = styled(Text)`
  padding: 20px;
  font-size: ${props => props.small ? '0.8em' : '1em'} !important; /* Sorry, just did it to overflow MUI :( */
  color: ${getColor('secondary')};
  font-weight: 400 !important; /* Sorry, just did it to overflow MUI :( */
`

export const Header = styled(Text)`
  font-size: 2em !important; /* Sorry, just did it to overflow MUI :( */
  font-family: ${getFont('robotoMontserrat')} !important; /* Sorry, just did it to overflow MUI :( */
  color: ${getColor('secondary')};
`

export const Tag = styled(CoreButton)`
  background-color: ${getColor('secondary')};
  width: unset;
`

export const Button = styled(CoreButton)`
  width: 100%;
  margin: 20px 0 0;
`
