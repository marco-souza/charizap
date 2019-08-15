import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'
import bodyImage from 'assets/images/tetris-2p.gif'

import SelectDBForm from './Form'
import { Step } from '../styled'

const SelectDBStep = (props) => (
  <Step {...props} >
    <Text>Would you like to have MySQL installed?</Text>

    <img src={bodyImage} alt='Select Database' />

    <SelectDBForm {...props} />
    <Text>MySQL is the most trusted and widely used open source database platform in use today.</Text>
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
