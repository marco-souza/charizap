import React from 'react'
import PropTypes from 'prop-types'
import { withBreakpoints } from 'react-breakpoints'

import Cover from 'app/components/core/Cover'

import loginStarship from 'assets/images/login_starship.gif'

const LoginCover = ({
  className,
  breakpoints,
  currentBreakpoint,
}) => (
  <div className={className}>
    {breakpoints[currentBreakpoint] > breakpoints.mobile
      ? (
        <Cover
          background='primary'
          logo='white'
          message='Make an impact on the world'
          className={className}
          tittleUp
        >
          <img src={loginStarship} alt='' className='starship' />
        </Cover>
      )
      : null
    }
  </div>
)
LoginCover.propTypes = {
  className: PropTypes.string,
  breakpoints: PropTypes.object,
  currentBreakpoint: PropTypes.string,
}

export default withBreakpoints(LoginCover)
