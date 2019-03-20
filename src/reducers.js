import { combineReducers } from 'redux'
import { weatherReducer as weather } from '@features/common'
import { connectRouter } from 'connected-react-router'

export const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    weather
  })
