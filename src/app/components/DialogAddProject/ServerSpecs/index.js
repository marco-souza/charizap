import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import Highlight from 'app/components/core/Highlight'
import bodyImage from 'assets/images/tetris-1p.gif'

import ServerSpecsForm from './Form'
import { Step, SubText, Header } from '../styled'

const shouldRun = data => get(data, 'credentials.provider', null)

const ServerSpecsStep = (props) => (
  <Step {...props} shouldRun={shouldRun}>
    <Header variant='h4'>
      Now lets define your server name.
    </Header>
    <SubText variant='subtitle2'>
      Let's create your machine with <Highlight>php</Highlight> and <Highlight>Nginx</Highlight>.
    </SubText>

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
