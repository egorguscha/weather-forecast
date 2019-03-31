import { RECEIVE_WEATHER_FORECAST } from '../action-types'
import moment from 'moment'

export const receiveWeatherForecast = (isLoaded, { hourly }) => {
  const hourlyForecast = new Map()

  hourly.data
    .map(item => {
      const { time, icon, temperature } = item
      const convertedDate = moment.unix(time)
      const date = new Date(convertedDate)
      const weekday = date.toLocaleDateString('en', { weekday: 'long' })
      const numberday = date.toLocaleDateString('en', { day: 'numeric' })
      const month = date.toLocaleDateString('en', { month: 'numeric' })
      const timeHourly = date.toLocaleTimeString('en', {
        hour: '2-digit',
        minute: '2-digit'
      })

      return {
        id: time,
        numberday,
        weekday,
        month,
        temperature,
        icon,
        timeHourly
      }
    })
    .forEach(({ weekday, ...restDays }, i) => {
      if (i % 3 === 0) {
        if (hourlyForecast.has(weekday)) {
          hourlyForecast.get(weekday).push(restDays)
        } else {
          hourlyForecast.set(weekday, [restDays])
        }
      }
    })

  return {
    type: RECEIVE_WEATHER_FORECAST,
    isLoaded,
    hourlyForecast
  }
}
