import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash/pick'
import { withFormik } from 'formik'

import Input from 'app/components/core/Input'
import Select from 'app/components/core/Select'

import { validationSchema, formFields } from './constants'
import { SELF_HOSTED } from '../SelectProvider/constants'
import { Button } from '../styled'

const DATA_KEY = 'serverSpecs'
const options = [
  { label: 'small', value: 'small' },
  { label: 'medium', value: 'medium' },
  { label: 'big', value: 'big' },
  { label: 'huge', value: 'huge' },
]

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
  setFieldValue,
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

        {data.credentials.provider.value !== SELF_HOSTED && (
          <Select
            name='size'
            label='Select size'
            placeholder='Choose an instance type'
            onChange={value => setFieldValue('size', value)}
            options={options}
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
  setFieldValue: PropTypes.func,
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
