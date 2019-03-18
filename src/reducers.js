import { combineReducers } from 'redux'
import { commonReducer as town, errorReducer as error } from '@features/common'
import { connectRouter } from 'connected-react-router'
export const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    town,
    error
  })
