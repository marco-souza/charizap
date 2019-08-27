// ^
// v
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

const Icon = (props) => (
  <div>
    <FontAwesomeIcon icon={faSort} {...props} />
  </div>
)

export default Icon
