import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import useAuth from 'app/redux/auth'

const PublicRoute = ({ isLogged, path, homePath, ...restProps }) =>
  isLogged
    ? <Redirect to={homePath} />
    : <Route {...restProps} path={path} />

PublicRoute.propTypes = {
  homePath: PropTypes.string,
  isLogged: PropTypes.bool,
  path: PropTypes.string.isRequired,
}

PublicRoute.defaultProps = {
  homePath: '/dashboard',
}

export default useAuth(PublicRoute)
