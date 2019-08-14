import React from 'react'
import PropTypes from 'prop-types'

import Step from 'app/components/core/MultiStepForm/Step'
import Text from 'app/components/core/Text'

import SelectProviderForm from './Form'

const shouldRun = data => false

const SelectProviderStep = (props) => (
  <Step {...props} shouldRun={shouldRun}>
    <Text>What is you server provider credentials?</Text>
    <Text variant='subtitle2'>What is you server provider credentials?</Text>

    <SelectProviderForm {...props} />
  </Step>
)

SelectProviderStep.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
}

export default SelectProviderStep
