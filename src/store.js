import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { createReducer } from './reducers'
import thunk from 'redux-thunk'

export const store = createStore(createReducer, applyMiddleware(thunk, logger))
