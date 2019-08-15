import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import Step from 'app/components/core/MultiStepForm/Step'
import Text from 'app/components/core/Text'

import SelectDBManagerForm from './Form'

const shouldRun = data => get(data, 'database.mysql', null)

const SelectDBManager = (props) => (
  <Step {...props} shouldRun={shouldRun}>
    <Text>Do you want to have phpMyAdmin for access?</Text>

    <SelectDBManagerForm {...props} />
    <Text>PhpMyAdmin is a tool designed to handle the administration of MySQL vit the Web.</Text>
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
