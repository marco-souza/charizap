import React from 'react'
import PropTypes from 'prop-types'
import { Field, ErrorMessage } from 'formik'

import ErrorMessageComponent from 'app/components/core/ErrorMessage'

const Input = ({ className, label, ...restProps }) => (
  <div className={className}>
    {label && <label>{label}</label>}

    <Field component='input' type='text' {...restProps} />
    <ErrorMessage component={ErrorMessageComponent} name={restProps.name} />
  </div>
)

Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
}

export default Input
