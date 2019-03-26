import { combineReducers } from 'redux'
import {
  weatherReducer as weather,
  filterReducer as filter
} from '@features/common'
import { connectRouter } from 'connected-react-router'

export const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    weather,
    filter
  })
