import { FETCH_WEATHER_FAILURE } from '../action-types'

export const fetchWeatherFailure = (name, message) => ({
  type: FETCH_WEATHER_FAILURE,
  name,
  message
})
