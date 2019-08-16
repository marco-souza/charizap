import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import Highlight from 'app/components/core/Highlight'
import bodyImage from 'assets/images/tetris-3p.gif'

import SelectDBManagerForm from './Form'
import { Step, SubText, Header } from '../styled'

const shouldRun = data => get(data, 'database.mysql', null)

const SelectDBManager = (props) => (
  <Step {...props} shouldRun={shouldRun}>
    <Header variant='h4'>Do you want to have phpMyAdmin for access?</Header>

    <img src={bodyImage} alt='Select DB Manager' />

    <SelectDBManagerForm {...props} />
    <SubText variant='subtitle2' small>
      <Highlight>PhpMyAdmin</Highlight> is a tool designed to handle the administration of MySQL vit the Web.
    </SubText>
  </Step>
)

SelectDBManager.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
}

export default SelectDBManager
