import React from 'react'
import PropTypes from 'prop-types'

import bodyImage from 'assets/images/tetris-5p.gif'

import { Step, SubText, Header } from '../styled'

const WaitStep = (props) => (
  <Step {...props}>
    <Header variant='h4'>
      It's coming?
    </Header>

    <img src={bodyImage} alt='Waiting...' />

    <SubText>Please wait, your project will take off in a few moments</SubText>
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
