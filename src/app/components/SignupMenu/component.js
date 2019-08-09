import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'

import Button from 'app/components/core/Button'

const SignupCover = ({ className }) => (
  <div className={className}>
    <Typography variant='p'>
      Already have an account?
    </Typography>
    <Link to='/login'>
      <Button variant='outlined'>Log in </Button>
    </Link>
  </div>
)

SignupCover.propTypes = {
  // children: PropTypes.node,
  className: PropTypes.string,
}

export default SignupCover
