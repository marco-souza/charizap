import React from 'react'
import PropTypes from 'prop-types'

import ContainedButton from './ContainedButton'
import TextButton from './TextButton'
import OutlinedButton from './OutlinedButton'

const variants = {
  contained: ContainedButton,
  outlined: OutlinedButton,
  text: TextButton,
}

const Button = ({ variant, children, ...restProps }) => {
  const SelectedButton = variants[variant] || variants.contained

  return (
    <SelectedButton {...restProps}>
      {children}
    </SelectedButton>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  variant: 'contained'
}

export default Button
