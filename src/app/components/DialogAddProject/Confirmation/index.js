import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'
import bodyImage from 'assets/images/tetris-4p.gif'

import ConfirmationForm from './Form'
import { Step } from '../styled'

const SelectDBStep = (props) => (
  <Step {...props}>
    <Text>Are you ready?</Text>

    <img src={bodyImage} alt='Select DB Manager' />

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
