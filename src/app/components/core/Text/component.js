import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

const Text = ({ className, children, variant }) => (
  <Typography className={className} variant={variant !== 'span' ? variant : null}>
    {children}
  </Typography>
)

Text.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Text
