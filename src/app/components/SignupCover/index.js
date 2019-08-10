import React from 'react'
import PropTypes from 'prop-types'
import { withBreakpoints } from 'react-breakpoints'

import Cover from 'app/components/core/Cover'

import Switch from './Switch'

const SignupCover = ({
  className,
  breakpoints,
  currentBreakpoint,
}) => (
  <div className={className}>
    {breakpoints[currentBreakpoint] > breakpoints.mobile
      ? (
        <Cover
          message='Focus on what really matters and leave it to us'
          className={className}
          logo='colored'
          padding='40px'
          renderBelow
          moreSpace
        >
          <Switch />
        </Cover>)
      : null
    }
  </div>
)

SignupCover.propTypes = {
  className: PropTypes.string,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
}

export default withBreakpoints(SignupCover)
