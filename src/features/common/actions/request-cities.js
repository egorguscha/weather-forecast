import { REQUEST_CITIES } from '../action-types'

export const requestCities = isLoaded => ({
  type: REQUEST_CITIES,
  isLoaded
})
