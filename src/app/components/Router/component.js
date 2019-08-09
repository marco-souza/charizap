import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'

import Loader from 'app/components/core/Loader'
import Login from 'app/pages/Login'
import Signup from 'app/pages/Signup'
import Dashboard from 'app/pages/Dashboard'

import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

const Root = () => <Redirect to='/login' />

const Page404 = () => <div>404</div>

const Router = ({ validateAuthKey, isLogged, loading }) => {
  useMemo(() => { validateAuthKey() }, [])

  if (loading.authKey) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path='/' component={Root} />
        <PublicRoute path='/login' component={Login} />
        <PublicRoute path='/signup' component={Signup} />

        <ProtectedRoute path='/dashboard' component={Dashboard} />

        <Route component={Page404} />
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
