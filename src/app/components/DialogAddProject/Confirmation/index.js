import React from 'react'
import PropTypes from 'prop-types'

import bodyImage from 'assets/images/tetris-4p.gif'

import ConfirmationForm from './Form'
import { Step, Header } from '../styled'

const SelectDBStep = (props) => (
  <Step {...props}>
    <Header variant='h4'>Are you ready?</Header>

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
