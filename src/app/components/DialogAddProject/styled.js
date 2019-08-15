import styled from 'styled-components'
import CoreStep from 'app/components/core/MultiStepForm/Step'
import Text from 'app/components/core/Text'

import { getColor, getFont } from 'app/helpers/theme'

export const Step = styled(CoreStep)`
  text-align: center;
  padding: 20px 100px;

  & img {
    width: 50%;
    padding: 20px 0;
  }

  & button {
    width: 100%;
    margin-top: 20px;
  }
`
export const SubText = styled(Text)`
  padding: 20px 0;
  font-size: ${props => props.small ? '0.8em' : '1em'} !important; /* Sorry, just did it to overflow MUI :( */
  color: ${getColor('secondary')};
  font-weight: 400 !important; /* Sorry, just did it to overflow MUI :( */
`

export const Header = styled(Text)`
  font-family: ${getFont('robotoMontserrat')};
  color: ${getColor('secondary')};
`
