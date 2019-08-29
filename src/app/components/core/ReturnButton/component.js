import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'
import Arrow from 'app/components/core/icons/BackArrow'

const ReturnButtom = ({ className, text, action }) => (
  <div className={className} onClick={action}>
    <Arrow />
    <Text color='secondary'>
      {text}
    </Text>
  </div>
)

ReturnButtom.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}

export default ReturnButtom
