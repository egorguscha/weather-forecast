import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { AppContainer } from 'react-hot-loader'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
const store = configureStore({ history })
const root = document.getElementById('root')

const render = () =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    root
  )

if (module.hot) {
  module.hot.accept('./app', render)
}
render()
