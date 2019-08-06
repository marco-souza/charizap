import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import useAuth from 'app/redux/auth'

const PublicRoute = ({ authKey, path, homePath, ...restProps }) =>
  authKey
    ? <Redirect to={homePath} />
    : <Route {...restProps} path={path} />

PublicRoute.propTypes = {
  homePath: PropTypes.string,
  authKey: PropTypes.string,
  path: PropTypes.string.isRequired,
}

PublicRoute.defaultProps = {
  homePath: '/dashboard',
}

export default useAuth(PublicRoute)
