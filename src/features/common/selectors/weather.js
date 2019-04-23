import { createSelector } from 'reselect'

export const getWeather = createSelector(
  state => state.weather,
  getWeatherSelector => getWeatherSelector
)
