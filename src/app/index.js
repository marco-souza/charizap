import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import theme from 'app/helpers/theme'
import Router from 'app/components/Router'
import registerServiceWorker from 'app/helpers/registerServiceWorker'
import { generateStore } from 'app/redux/store'

import 'typeface-roboto'

const store = generateStore()
registerServiceWorker()

const app = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ThemeProvider>
)

// Bind component to DOM
ReactDOM.render(app, document.getElementById('root'))
