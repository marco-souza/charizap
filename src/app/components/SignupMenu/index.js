import React from 'react'
import PropTypes from 'prop-types'

import PublicMenu from 'app/components/core/PublicMenu'

const SignupCover = ({ className }) => (
  <PublicMenu
    text='Already have an account?'
    href='/login'
    buttonText='Log in'
  />
)

SignupCover.propTypes = {
  // children: PropTypes.node,
  className: PropTypes.string,
}

export default SignupCover
