import React from 'react'
import PropTypes from 'prop-types'

import Cover from 'app/components/core/Cover'

import loginStarship from 'assets/images/login_starship.gif'

const LoginCover = ({ className }) => (
  <div className={className}>
    <Cover
      background='primary'
      logo='white'
      message='Make an impact on the world'
      className={className}
      tittleUp
    >
      <img src={loginStarship} alt='' className='starship' />
    </Cover>
  </div>
)

LoginCover.propTypes = {
  className: PropTypes.string,
}

export default LoginCover
