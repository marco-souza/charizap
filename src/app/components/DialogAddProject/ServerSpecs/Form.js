import React from 'react'
import pick from 'lodash/pick'
import { withFormik } from 'formik'

import Input from 'app/components/core/Input'
import Select from 'app/components/core/Select'

import {
  isSubmitDisabled,
  defaultFormikProps,
  hasError,
} from 'app/helpers/forms'

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

const Form = (props) => {
  const {
    data,
    handleSubmit,
    setFieldValue,
    className,
  } = props
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <Input
          name='name'
          label='Server name'
          placeholder='name your server'
          hasError={hasError(props, 'name')}
        />

        {data.credentials.provider.value !== SELF_HOSTED && (
          <Select
            name='size'
            label='Select size'
            placeholder='Choose an instance type'
            onChange={value => setFieldValue('size', value)}
            options={options}
            hasError={hasError(props, 'size')}
          />
        )}

        <Button type='submit' disable={isSubmitDisabled(props)}>
          Next
        </Button>
      </form>
    </div>
  )
}

Form.propTypes = {
  ...defaultFormikProps,
}

let Container
Container = withFormik({
  enableReinitialize: true,
  handleSubmit: onSubmit,
  validationSchema,
  mapPropsToValues,
})(Form)

export default Container
