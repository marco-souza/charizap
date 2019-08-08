import React from 'react'
import PropTypes from 'prop-types'

import Button from 'app/components/core/Button'

const LoginCover = ({ className }) => (
  <div className={className}>
    <a href='#'>Don't have an account?</a>

    <Button>Get started </Button>
  </div>
)

LoginCover.propTypes = {
  // children: PropTypes.node,
  className: PropTypes.string,
}

export default LoginCover
