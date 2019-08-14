import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash/pick'
import { withFormik } from 'formik'

import Button from 'app/components/core/Button'
import Input from 'app/components/core/Input'

import { validationSchema, formFields } from './constants'
import { SELF_HOSTED } from '../SelectProvider/constants'

const mapPropsToValues = values =>
  pick({ ...formFields, ...values }, Object.keys(formFields))

const onSubmit = (values, { props }) => {
  props.addData({
    serverSpecs: values,
  })
  props.nextStep()
}

const Form = ({
  data,
  values,
  handleSubmit,
  isSubmitting,
  className,
  ...otherProps
}) => {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <Input
          name='name'
          label='Server name'
          placeholder='name your server'
          required
        />

        {data.credentials.provider !== SELF_HOSTED && (
          <Input
            name='size'
            label='Server size'
            placeholder='Choose an instance type'
            required
          />
        )}

        <Button type='submit' disable={isSubmitting}>
          Next
        </Button>
      </form>
    </div>
  )
}

Form.propTypes = {
  data: PropTypes.object,
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
