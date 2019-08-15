import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import Text from 'app/components/core/Text'
import bodyImage from 'assets/images/tetris-1p.gif'

import ServerSpecsForm from './Form'
import { Step } from '../styled'

const shouldRun = data => get(data, 'credentials.provider', null)

const ServerSpecsStep = (props) => (
  <Step {...props} shouldRun={shouldRun}>
    <Text>Now lets define your server name.</Text>
    <Text variant='subtitle2'>Let's create your machine with php and Nginx.</Text>

    <img src={bodyImage} alt='Server Specifications' />

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
