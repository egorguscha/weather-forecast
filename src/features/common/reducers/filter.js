import {
  FILTER_BY_DEFINITION,
  REQUEST_CITIES,
  RECEIVE_CITIES
} from '../action-types'

const initialState = {
  cities: [],
  filterType: null
}
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CITIES:
      return { ...state, isLoaded: action.isLoaded }
    case RECEIVE_CITIES:
      return { ...state, isLoaded: action.isLoaded, cities: action.cities }
    case FILTER_BY_DEFINITION:
      return {
        ...state,
        filterType: action.filterType,
        cities: [...action.sorted]
      }
    default:
      return state
  }
}
