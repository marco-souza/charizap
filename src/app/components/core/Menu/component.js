import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({
  leftSide,
  rightSide,
  className,
}) => (
  <div className={className}>
    <div className='leftSide'>
      {leftSide}
    </div>

    <div className='rightSide'>
      {rightSide}
    </div>
  </div>
)

Menu.propTypes = {
  className: PropTypes.string.isRequired,
  leftSide: PropTypes.node.isRequired,
  rightSide: PropTypes.node.isRequired,
}

export default Menu
