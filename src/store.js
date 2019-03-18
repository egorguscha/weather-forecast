import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { createReducer } from './reducers'
import { routerMiddleware } from 'connected-react-router'

import thunk from 'redux-thunk'

export function configureStore({ history, initalState = {} } = {}) {
  const store = createStore(
    createReducer(history),
    initalState,
    compose(applyMiddleware(routerMiddleware(history), thunk, logger))
  )
  return store
}
