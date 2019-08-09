import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import Logo from 'app/components/core/Logo'

const Cover = ({
  children,
  message,
  logo,
  renderBelow,
  className,
  ...otherProps
}) => (
  <div className={className}>
    <Logo variant={logo} />
    {!renderBelow && children}

    <Typography variant='h5'>
      {message}
    </Typography>

    {renderBelow && children}
  </div>
)

Cover.propTypes = {
  logo: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  renderBelow: PropTypes.bool,
  message: PropTypes.string.isRequired,
}

export default Cover
