import {
  RECEIVE_WEATHER,
  REQUEST_WEATHER,
  RECEIVE_FORECAST
} from './action-types'

export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_WEATHER:
      return { ...state, ...action.payload }
    case REQUEST_WEATHER:
      return { ...state, isLoaded: action.isLoaded }
    case RECEIVE_FORECAST:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const getWeather = state => state.weather

export const getForecast = state => state.forecast
