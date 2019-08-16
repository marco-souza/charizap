import React from 'react'
import PropTypes from 'prop-types'

import Highlight from 'app/components/core/Highlight'
import bodyImage from 'assets/images/tetris-2p.gif'

import SelectDBForm from './Form'
import { Step, SubText, Header } from '../styled'

const SelectDBStep = (props) => (
  <Step {...props} >
    <Header variant='h4'>
      Would you like to have MySQL installed?
    </Header>

    <img src={bodyImage} alt='Select Database' />

    <SelectDBForm {...props} />
    <SubText variant='subtitle2' small>
      <Highlight>MySQL</Highlight> is the most trusted and widely used open source database platform in use today.
    </SubText>
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
