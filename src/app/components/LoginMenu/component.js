import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'

import Button from 'app/components/core/Button'

const LoginCover = ({ className }) => (
  <div className={className}>
    <Typography variant='p'>
      Don't have an account?
    </Typography>
    <Link to='/signup'>
      <Button variant='outlined' >Get started </Button>
    </Link>
  </div>
)

LoginCover.propTypes = {
  // children: PropTypes.node,
  className: PropTypes.string,
}

export default LoginCover
