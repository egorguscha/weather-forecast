import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { App } from './app'

const history = createBrowserHistory()
const store = configureStore({ history })
const root = document.getElementById('root')

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    root
  )

render()
