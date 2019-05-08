import { REQUEST_CITIES, RECEIVE_CITIES } from '../action-types'

const initialState = {
  cities: []
}
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CITIES:
      return { ...state, isLoaded: action.isLoaded }
    case RECEIVE_CITIES:
      return { ...state, isLoaded: action.isLoaded, cities: action.cities }

    default:
      return state
  }
}
