import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

import logo from 'assets/images/logo_devopness_beta.png'
import loginStarship from 'assets/images/login_starship.gif'

const LoginCover = ({ className }) => (
  <div className={className}>
    <div>
      <img src={logo} alt='devopness' className='logo' />
      <img src={loginStarship} alt='' className='starship' />
    </div>

    <Typography variant='h5'>
      Make an impact on the world
    </Typography>
  </div>
)

LoginCover.propTypes = {
  // children: PropTypes.node,
  className: PropTypes.string,
}

export default LoginCover
