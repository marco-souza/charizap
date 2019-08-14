import React from 'react'
import PropTypes from 'prop-types'

import Header from 'app/components/core/Header'
import { getColor } from 'app/helpers/theme'
import styled from 'styled-components'

import FormContainer from './FormContainer'

const CustomHeader = styled(Header)`
  margin: 0;
  color: ${getColor('secondary')};
`

const LoginForm = ({ className }) => (
  <div className={className}>
    <CustomHeader>
      Be a happy DevOps. Enter your account.
    </CustomHeader>

    <FormContainer />
  </div>
)

LoginForm.propTypes = {
  className: PropTypes.string,
}

export default LoginForm
