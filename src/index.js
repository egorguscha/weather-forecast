import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { Provider } from 'react-redux'
import { store } from './store'

const root = document.getElementById('root')
const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )

render()
