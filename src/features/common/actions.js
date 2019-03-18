import { GET_TOWN_WEATHER_FORECAST } from './action-types'

export const getTownWeatherForecast = redirect => ({
  type: GET_TOWN_WEATHER_FORECAST,
  payload: {
    redirect
  }
})
