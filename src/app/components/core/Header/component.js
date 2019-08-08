import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ component, children, ...restProps }) => (
  React.createElement(component, restProps, children)
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]),
}

Header.defaultProps = {
  component: 'h1',
}

export default Header
