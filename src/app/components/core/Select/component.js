import React from 'react'
import PropTypes from 'prop-types'
import { components } from 'react-select'
import { ErrorMessage } from 'formik'

import ErrorMessageComponent from 'app/components/core/ErrorMessage'
import { ReactSelect, Label, Container, SortIcon } from './styled'

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <SortIcon />
  </components.DropdownIndicator>
)

const Select = ({ label, hasError, className, options, ...restProps }) => (
  <Container>
    {label && <Label>{label}</Label>}

    <ReactSelect
      classNamePrefix='devopness'
      className={className}
      options={options}
      components={{ DropdownIndicator }}
      {...restProps}
    />
    {hasError && <ErrorMessage component={ErrorMessageComponent} name={restProps.name} />}
  </Container>
)

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
  hasError: PropTypes.bool,
  label: PropTypes.string,
}

export default Select