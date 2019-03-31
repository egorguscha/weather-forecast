import { REQUEST_WEATHER } from '../action-types'

export const requestWeather = isLoaded => ({
  type: REQUEST_WEATHER,
  isLoaded
})
