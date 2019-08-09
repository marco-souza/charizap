import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

import logo from 'assets/images/logo_devopness_alfa.png'
import meditaCompress from 'assets/images/Medita-Compress.gif'

import Button from 'app/components/core/Button'

const SignupCover = ({ className }) => (
  <div className={className}>
    <div>
      <img src={logo} alt='devopness' className='logo' />
      <Typography variant='h5'>
        Focus on what really matters to you and leave the dirty job to us
      </Typography>

      <div>
        <Button variant='contained' >Be Happy</Button>
        <Button variant='outlined' >Lonely</Button>
      </div>
      <img src={meditaCompress} alt='' className='lonelyCompress' />
    </div>
  </div>
)

SignupCover.propTypes = {
  className: PropTypes.string,
}

export default SignupCover
