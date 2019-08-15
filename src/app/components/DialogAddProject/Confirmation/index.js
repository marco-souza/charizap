import React from 'react'
import PropTypes from 'prop-types'

import Step from 'app/components/core/MultiStepForm/Step'
import Text from 'app/components/core/Text'

import ConfirmationForm from './Form'

const shouldRun = data => data && data.credentials.provider

const SelectDBStep = (props) => (
  <Step {...props} shouldRun={shouldRun}>
    <Text>Are you ready?</Text>

    <ConfirmationForm {...props} />
  </Step>
)

SelectDBStep.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
}

export default SelectDBStep
