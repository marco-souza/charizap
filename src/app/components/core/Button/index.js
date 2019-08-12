import React from 'react'
import PropTypes from 'prop-types'

import ContainedButton from './ContainedButton'
import TextButton from './TextButton'
import OutlinedButton from './OutlinedButton'
import IconButton from './IconButton'

const variants = {
  contained: ContainedButton,
  outlined: OutlinedButton,
  text: TextButton,
  icon: IconButton,
}

const Button = ({ icon, variant, children, ...restProps }) => {
  const SelectedButton = variants[variant] || variants.contained

  return (
    <SelectedButton {...restProps}>
      {icon}
      {children}
    </SelectedButton>
  )
}

Button.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.keys(variants)),
}

Button.defaultProps = {
  variant: 'contained'
}

export default Button
