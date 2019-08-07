import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import useAuth from 'app/redux/auth'

const ProtectedRoute = ({ authKey, path, authPath, ...restProps }) =>
  !authKey
    ? <Redirect to={authPath} />
    : <Route {...restProps} path={path} />

ProtectedRoute.propTypes = {
  authPath: PropTypes.string,
  authKey: PropTypes.string,
  path: PropTypes.string.isRequired,
}

ProtectedRoute.defaultProps = {
  authPath: '/login',
}

export default useAuth(ProtectedRoute)
