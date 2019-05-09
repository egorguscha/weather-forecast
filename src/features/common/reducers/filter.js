import {
  REQUEST_CITIES,
  RECEIVE_CITIES,
  FILTER_WEATHER_PARAMS
} from '../action-types'

const initialState = {
  cities: [],
  filterType: null,
  isLoaded: false
}
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CITIES:
      return { ...state, isLoaded: action.isLoaded }
    case RECEIVE_CITIES:
      return {
        ...state,
        isLoaded: action.isLoaded,
        cities: action.cities
      }
    case FILTER_WEATHER_PARAMS:
      return {
        ...state,
        filterType: action.filterType
      }

    default:
      return state
  }
}
