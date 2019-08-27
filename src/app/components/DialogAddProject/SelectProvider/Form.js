import React from 'react'
import get from 'lodash/get'
import pick from 'lodash/pick'
import { withFormik } from 'formik'

import { useWrappers } from 'app/helpers/redux'
import Input from 'app/components/core/Input'
import Select from 'app/components/core/Select'

import {
  isSubmitDisabled,
  defaultFormikProps,
  hasError,
} from 'app/helpers/forms'
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

const Form = (props) => {
  const {
    values,
    handleSubmit,
    setFieldValue,
    className,
  } = props
  const extraFields = values.provider && get(providers, get(values, 'provider.value'))
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <Select
          label='What is your provider?'
          name='provider'
          value={values.provider}
          placeholder='Select provider'
          onChange={value => setFieldValue('provider', value)}
          hasError={hasError(props, 'provider')}
          options={options}
        />

        {extraFields && extraFields
          .map(input => (
            <Input
              key={input.name}
              {...input}
              hasError={hasError(props, input.name)}
            />
          ))
        }

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

export default useWrappers(
  withFormik({
    enableReinitialize: true,
    handleSubmit: onSubmit,
    validationSchema,
    mapPropsToValues,
  })
)(Form)
