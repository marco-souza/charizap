import styled from 'styled-components'

import CoreHeader from 'app/components/core/Header'
import { getFont, getColor } from 'app/helpers/theme'

export const FormContainer = styled.div`
  max-width: 430px;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
  font-family: ${getFont('robotoDefault')};

  & button {
    width: 100%;
    margin: 20px 0;
  }

  & form {
    margin-top: 70px;
  }
`

export const Header = styled(CoreHeader)`
  margin: 0;
  color: ${getColor('secondary')};
`

export const LoginContainer = styled.div`
  max-width: 430px;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
  font-family: ${getFont('robotoDefault')};
`
