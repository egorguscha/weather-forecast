import {
  RECEIVE_CURRENT_WEATHER,
  REQUEST_WEATHER,
  RECEIVE_FORECAST,
  RECEIVE_DAILY_WEATHER
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
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const getWeather = state => state.weather

export const getForecast = state => state.days
