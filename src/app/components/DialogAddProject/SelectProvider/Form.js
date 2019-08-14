import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import pick from 'lodash/pick'
import { withFormik } from 'formik'

import Button from 'app/components/core/Button'
import Input from 'app/components/core/Input'

import { validationSchema, formFields, providers } from './constants'

const mapPropsToValues = values =>
  pick({ ...formFields, ...values }, Object.keys(formFields))

const onSubmit = (values, { props }) => {
  props.addData({
    credentials: values
  })
  props.nextStep()
}

const Form = ({
  values,
  handleSubmit,
  isSubmitting,
  className,
}) => {
  const extraFields = values.provider && get(providers, values.provider)
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <Input
          name='provider'
          label='What is your provider'
          placeholder='AWS, Digital Ocean, ...'
        />

        {extraFields && extraFields
          .map(input => (
            <Input
              key={input.name}
              {...input}
              required
            />
          ))
        }

        <Button type='submit' disable={isSubmitting}>
          Next
        </Button>
      </form>
    </div>
  )
}

Form.propTypes = {
  values: PropTypes.object,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
}

let Container
Container = withFormik({
  enableReinitialize: true,
  handleSubmit: onSubmit,
  validationSchema,
  mapPropsToValues,
})(Form)

export default Container
