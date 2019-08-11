import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'

const Input = ({ className, label, ...restProps }) => (
  <div className={className}>
    {label && <label>{label}</label>}

    <Field component='input' type='text' {...restProps} />
  </div>
)

Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
}

export default Input
