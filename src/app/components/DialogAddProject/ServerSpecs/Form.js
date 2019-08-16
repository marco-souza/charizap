import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash/pick'
import { withFormik } from 'formik'

import Input from 'app/components/core/Input'

import { validationSchema, formFields } from './constants'
import { SELF_HOSTED } from '../SelectProvider/constants'
import { Button } from '../styled'

const DATA_KEY = 'serverSpecs'

const mapPropsToValues = ({ data }) =>
  pick({
    ...formFields,
    ...data[DATA_KEY],
  }, Object.keys(formFields))

const onSubmit = (values, { props }) => {
  props.addData({
    [DATA_KEY]: values
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
