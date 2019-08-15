import React from 'react'
import PropTypes from 'prop-types'

import Highlight from 'app/components/core/Highlight'
import bodyImage from 'assets/images/tetris-1p.gif'

import SelectProviderForm from './Form'
import { Step, SubText, Header } from '../styled'

const SelectProviderStep = (props) => (
  <Step {...props}>
    <Header variant='h4'>
      What is you <Highlight>server provider</Highlight> credential?
    </Header>
    <SubText variant='subtitle2'>
      Let's create your machine with <Highlight>php</Highlight> and <Highlight>Nginx</Highlight>.
    </SubText>

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
