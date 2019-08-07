import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import useAuth from 'app/redux/auth'

const ProtectedRoute = ({ isLogged, path, authPath, ...restProps }) =>
  !isLogged
    ? <Redirect to={authPath} />
    : <Route {...restProps} path={path} />

ProtectedRoute.propTypes = {
  authPath: PropTypes.string,
  isLogged: PropTypes.bool,
  path: PropTypes.string.isRequired,
}

ProtectedRoute.defaultProps = {
  authPath: '/login',
}

export default useAuth(ProtectedRoute)
