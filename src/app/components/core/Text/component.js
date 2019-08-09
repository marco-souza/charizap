import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

const Text = ({ className, children, variant }) => (
  <Typography className={className} variant={variant}>
    {children}
  </Typography>
)

Text.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Text
