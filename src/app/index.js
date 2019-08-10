import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import theme from 'app/helpers/theme'
import Router from 'app/components/Router'
import registerServiceWorker from 'app/helpers/registerServiceWorker'
import { generateStore } from 'app/redux/store'

import WebFont from 'webfontloader'
import 'typeface-roboto'
import ReactBreakpoints from 'react-breakpoints'

const store = generateStore()
registerServiceWorker()

const breakpoints = {
  minimal: 576,
  small: 768,
  medium: 992,
  large: 1200,
}

WebFont.load({
  google: {
    families: ['Roboto:300,400,500']
  }
})

const app = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ReactBreakpoints breakpoints={breakpoints}>
        <Router />
      </ReactBreakpoints>
    </Provider>
  </ThemeProvider>
)

// Bind component to DOM
ReactDOM.render(app, document.getElementById('root'))
