import React from 'react'
import PropTypes from 'prop-types'

import Step from 'app/components/core/MultiStepForm/Step'
import Text from 'app/components/core/Text'

const SelectDBStep = (props) => (
  <Step {...props}>
    <Text>It's coming?</Text>

    <Text>Please wait, your project will take off in a few moments</Text>
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
