import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import Logo from 'app/components/core/Logo'

const Cover = ({ children, message, logo, className, ...otherProps }) => (
  <div className={className}>
    <div>
      <Logo variant={logo} />
      {children}
    </div>

    <Typography variant='h5'>
      {message}
    </Typography>
  </div>
)

Cover.propTypes = {
  logo: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired,
}

export default Cover
