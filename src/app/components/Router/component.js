import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'

import Login from 'app/pages/Login'
import Signup from 'app/pages/Signup'
import Dashboard from 'app/pages/Dashboard'

import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

const Router = ({ validateAuthKey, isLogged, loading }) => {
  useMemo(() => { validateAuthKey() }, [])

  if (loading.authKey) {
    return <div>Loading here...</div>
  }

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path='/' component={() => <Redirect to='/login' />} />
        <PublicRoute path='/login' component={Login} />
        <PublicRoute path='/signup' component={Signup} />

        <ProtectedRoute path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

Router.propTypes = {
  validateAuthKey: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loading: PropTypes.shape({
    authKey: PropTypes.bool,
  }),
}

export default Router
