import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from 'app/components/core/Text'
import Arrow from 'app/components/core/icons/BackArrow'

const ReturnButtom = ({ text, action }) => (
  // TODO this structure is needed only if rafael keep 'Back' text
  <Text>
    <Arrow onClick={action} />
    {text}
  </Text>
)

ReturnButtom.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}

export default styled(ReturnButtom)`
  text-align: left;
`
