import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import pick from 'lodash/pick'
import { withFormik } from 'formik'

import Input from 'app/components/core/Input'
import Select from 'app/components/core/Select'

import {
  validationSchema,
  formFields,
  providers,
  AWS,
  DIGITAL_OCEAN,
  SELF_HOSTED,
} from './constants'
import { Button } from '../styled'

const DATA_KEY = 'credentials'
const options = [
  { label: 'AWS', value: AWS },
  { label: 'Digital Ocean', value: DIGITAL_OCEAN },
  { label: 'Self Hosted (vps)', value: SELF_HOSTED },
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
  values,
  handleSubmit,
  isSubmitting,
  setFieldValue,
  className,
}) => {
  const extraFields = values.provider && get(providers, get(values, 'provider.value'))
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <Select
          label='What is your provider?'
          placeholder='Select provider'
          onChange={value => setFieldValue('provider', value)}
          options={options}
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
