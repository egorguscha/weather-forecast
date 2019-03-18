import { combineReducers } from 'redux'
import { commonReducer as common } from '@features/common'

export const createReducer = combineReducers({ common })
