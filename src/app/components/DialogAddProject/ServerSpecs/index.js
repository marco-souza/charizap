import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import Step from 'app/components/core/MultiStepForm/Step'
import Text from 'app/components/core/Text'

import ServerSpecsForm from './Form'

const shouldRun = data => get(data, 'credentials.provider', null)

const ServerSpecsStep = (props) => (
  <Step {...props} shouldRun={shouldRun}>
    <Text>Now lets define your server name.</Text>
    <Text variant='subtitle2'>Let's create your machine with php and Nginx.</Text>

    <ServerSpecsForm {...props} />
  </Step>
)

ServerSpecsStep.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
}

export default ServerSpecsStep
