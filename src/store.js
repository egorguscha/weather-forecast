import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { createReducer } from './reducers'
import { routerMiddleware } from 'connected-react-router'

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function configureStore({ history, initalState = {} } = {}) {
  const middlewares = [thunk, logger, routerMiddleware(history)]
  const store = createStore(
    createReducer(history),
    initalState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
  return store
}
