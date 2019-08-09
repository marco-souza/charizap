import React from 'react'
import PropTypes from 'prop-types'

import PublicMenu from 'app/components/core/PublicMenu'

const LoginMenu = ({ className }) => (
  <PublicMenu
    text="Don't have an account?"
    href='/signup'
    buttonText='Get started'
  />
)

LoginMenu.propTypes = {
  className: PropTypes.string,
}

export default LoginMenu
