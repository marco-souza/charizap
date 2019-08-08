import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ className, label, ...restProps }) => (
  <div className={className}>
    {label && <label>{label}</label>}

    <input type='text' {...restProps} />
  </div>
)

Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
}

export default Input
