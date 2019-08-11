import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'

const Textarea = ({ className, label, ...restProps }) => (
  <div className={className}>
    {label && <label>{label}</label>}

    <Field component='textarea' {...restProps} />
  </div>
)

Textarea.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
}

export default Textarea
