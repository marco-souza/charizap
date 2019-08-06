import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'

import Login from 'app/pages/Login'
import Signup from 'app/pages/Signup'
import Dashboard from 'app/pages/Dashboard'

import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

const Router = ({ authKey, loading }) => {
  // TODO: ask to validate authKey
  // TODO: create isValidAuthKey
  if (loading.authKey) {
    return (
      <div>Loading here...</div>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        {/* TODO Check if is auth and redirect to correct page */}
        <PublicRoute exact path='/' component={() => <Redirect to='/login' />} />
        <PublicRoute path='/login' component={Login} />
        <PublicRoute path='/signup' component={Signup} />

        <ProtectedRoute path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

Router.propTypes = {
  authKey: PropTypes.string,
  loading: PropTypes.shape({
    authKey: PropTypes.bool,
  }),
}

export default Router
