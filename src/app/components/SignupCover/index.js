import React from 'react'
import PropTypes from 'prop-types'

import Cover from 'app/components/core/Cover'

import Switch from './Switch'

const SignupCover = ({ className }) => (
  <div className={className}>
    <Cover
      message='Focus on what really matters and leave it to us'
      className={className}
      logo='colored'
      padding='40px'
      renderBelow
      moreSpace
    >
      <Switch />
    </Cover>
  </div>
)

SignupCover.propTypes = {
  className: PropTypes.string,
}

export default SignupCover
