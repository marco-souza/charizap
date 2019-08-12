import React from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'

const Select = ({ className, value, handleChange, options, ...restProps }) => (
  <ReactSelect
    className={className}
    value={value}
    onChange={handleChange}
    options={options}
  />
)

Select.propTypes = {
  value: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
}

export default Select
