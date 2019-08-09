import React from 'react'
import PropTypes from 'prop-types'

import Header from 'app/components/core/Header'
import styled from 'styled-components'

import FormContainer from './FormContainer'

const CustomHeader = styled(Header)`
  margin: 0;
`

const LoginForm = ({ className }) => (
  <div className={className}>
    <CustomHeader>
    Get started absolutely free. No credit card needed.
    </CustomHeader>

    <FormContainer />
  </div>
)

LoginForm.propTypes = {
  className: PropTypes.string,
}

export default LoginForm
