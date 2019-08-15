import styled from 'styled-components'
import CoreStep from 'app/components/core/MultiStepForm/Step'

// import { getFont, getColor, getBgColor } from 'app/helpers/theme'

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
