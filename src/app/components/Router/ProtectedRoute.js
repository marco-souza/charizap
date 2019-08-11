import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import PrivatePageTemplate from 'app/components/PrivatePageTemplate'

import useAuth from 'app/redux/auth'

const ProtectedRoute = ({ isLogged, path, authPath, ...restProps }) =>
  !isLogged
    ? <Redirect to={authPath} />
    : (
      <PrivatePageTemplate>
        <Route {...restProps} path={path} />
      </PrivatePageTemplate>
    )

ProtectedRoute.propTypes = {
  authPath: PropTypes.string,
  isLogged: PropTypes.bool,
  path: PropTypes.string.isRequired,
}

ProtectedRoute.defaultProps = {
  authPath: '/login',
}

export default useAuth(ProtectedRoute)
