import React from 'react'
import PropTypes from 'prop-types'

import Button from 'app/components/core/Button'
import Link from 'app/components/core/Link'

const LoginCover = ({ className }) => (
  <div className={className}>
    <Link variant='secondaryVariant' small href='#'>Don't have an account?</Link>

    <Button>Get started </Button>
  </div>
)

LoginCover.propTypes = {
  // children: PropTypes.node,
  className: PropTypes.string,
}

export default LoginCover
