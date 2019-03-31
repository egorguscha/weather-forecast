import moment from 'moment'
import { RECEIVE_WEATHER_DAILY } from '../action-types'

export const receiveWeatherDaily = (isLoaded, { daily }) => {
  const dailyWeather = daily.data.map(item => {
    const {
      time,
      icon,
      humidity,
      pressure,
      windSpeed,
      temperatureMin,
      temperatureMax,
      visibility
    } = item

    const convertedDate = moment.unix(time)
    const date = new Date(convertedDate)
    const weekday = date.toLocaleDateString('en', { weekday: 'long' })
    const month = date.toLocaleDateString('en', { month: 'numeric' })
    const day = date.toLocaleDateString('en', { day: 'numeric' })

    return {
      weekday,
      month,
      day,
      time,
      icon,
      humidity,
      pressure,
      windSpeed,
      temperatureMin,
      temperatureMax,
      visibility
    }
  })

  return {
    type: RECEIVE_WEATHER_DAILY,
    isLoaded,
    dailyWeather
  }
}
