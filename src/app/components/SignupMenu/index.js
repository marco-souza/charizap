import React from 'react'
import PropTypes from 'prop-types'

import PublicMenu from 'app/components/core/PublicMenu'

const SignupMenu = ({ className }) => (
  <PublicMenu
    text='Already have an account?'
    href='/login'
    buttonText='Log in'
  />
)

SignupMenu.propTypes = {
  // children: PropTypes.node,
  className: PropTypes.string,
}

export default SignupMenu
