import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'
import bodyImage from 'assets/images/tetris-5p.gif'

import { Step } from '../styled'

const WaitStep = (props) => (
  <Step {...props}>
    <Text>It's coming?</Text>

    <img src={bodyImage} alt='Waiting...' />

    <Text>Please wait, your project will take off in a few moments</Text>
  </Step>
)

WaitStep.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
}

export default WaitStep
