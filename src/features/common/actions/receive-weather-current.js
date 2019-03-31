import { RECEIVE_WEATHER_CURRENT } from '../action-types'

export const receiveWeatherCurrent = (isLoaded, { timezone, currently }) => {
  const { icon, temperature } = currently

  return {
    type: RECEIVE_WEATHER_CURRENT,
    isLoaded,
    currentlyWeather: {
      timezone,
      img: icon,
      temperature
    }
  }
}
