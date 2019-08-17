import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'

import ErrorMessage from 'app/components/core/ErrorMessage'

const Input = ({ className, label, errorMessage, ...restProps }) => (
  <div className={className}>
    {label && <label>{label}</label>}

    <Field component='input' type='text' {...restProps} />
    <ErrorMessage>
      {errorMessage}
    </ErrorMessage>
  </div>
)

Input.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
}

export default Input
