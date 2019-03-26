import {
  RECEIVE_CURRENT_WEATHER,
  REQUEST_WEATHER,
  RECEIVE_FORECAST,
  RECEIVE_DAILY_WEATHER,
  FILTER_BY_DEFINITION,
  REQUEST_CITIES,
  RECEIVE_CITIES
} from './action-types'

export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return { ...state, isLoaded: action.isLoaded }
    case RECEIVE_CURRENT_WEATHER:
      return {
        ...state,
        currentlyWeather: { ...action.currentlyWeather },
        isLoaded: action.isLoaded
      }
    case RECEIVE_DAILY_WEATHER:
      return {
        ...state,
        dailyWeather: [...action.dailyWeather],
        isLoaded: action.isLoaded
      }
    case RECEIVE_FORECAST:
      return {
        ...state,
        hourly: action.hourlyForecast,
        isLoaded: action.isLoaded
      }
    default:
      return state
  }
}

export const getWeather = state => state.weather
export const getForecast = state => state.days

// Filter

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
