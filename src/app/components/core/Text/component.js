import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

const Text = ({ className, children, ...otherProps }) => (
  <Typography className={className} {...otherProps}>
    {children}
  </Typography>
)

Text.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Text
