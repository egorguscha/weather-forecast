import { createSelector } from 'reselect'

export const weatherSelector = createSelector(
  state => state.weather,
  getWeatherSelector => getWeatherSelector
)
