import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'
import bodyImage from 'assets/images/tetris-1p.gif'

import SelectProviderForm from './Form'
import { Step } from '../styled'

const SelectProviderStep = (props) => (
  <Step {...props}>
    <Text>What is you server provider credentials?</Text>
    <Text variant='subtitle2'>What is you server provider credentials?</Text>

    <img src={bodyImage} alt='Cloud Provider' />

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
