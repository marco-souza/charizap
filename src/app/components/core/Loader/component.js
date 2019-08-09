import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'

import tetris from 'assets/images/tetris-loader.gif'

const Loader = ({ className, children, variant }) => (
  <div className={className}>
    <div>
      <img src={tetris} alt='Loading...' />

      <Text>
        Loading...
      </Text>
    </div>

  </div>
)

Loader.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string.isRequired,
}

export default Loader
