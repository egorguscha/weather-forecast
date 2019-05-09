import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER_CURRENT,
  RECEIVE_WEATHER_DAILY,
  RECEIVE_WEATHER_FORECAST
} from '../action-types'

const initialState = {
  isLoaded: true
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return { ...state, isLoaded: action.isLoaded }
    case RECEIVE_WEATHER_CURRENT:
      return {
        ...state,
        currentlyWeather: { ...action.currentlyWeather },
        isLoaded: action.isLoaded
      }
    case RECEIVE_WEATHER_DAILY:
      return {
        ...state,
        dailyWeather: [...action.dailyWeather],
        isLoaded: action.isLoaded
      }
    case RECEIVE_WEATHER_FORECAST:
      return {
        ...state,
        hourly: action.hourlyForecast,
        isLoaded: action.isLoaded
      }
    default:
      return state
  }
}
