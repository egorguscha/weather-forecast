import { request } from './request'
import { push } from 'connected-react-router'

import {
  RECEIVE_WEATHER,
  REQUEST_WEATHER,
  RECEIVE_FORECAST,
  FETCH_WEATHER_FAILURE
} from './action-types'

export const fetchWeatherFailure = (name, message) => ({
  type: FETCH_WEATHER_FAILURE,
  name,
  message
})

export const receiveWeather = (isLoaded, weatherCurrent) => {
  const {
    name,
    main: { temp, pressure, humidity },
    weather: [{ icon }]
  } = weatherCurrent

  return {
    type: RECEIVE_WEATHER,
    payload: {
      isLoaded,
      weather: {
        name,
        temp,
        icon,
        pressure,
        humidity
      }
    }
  }
}

export const receiveForecast = (isLoaded, weatherForecast) => {
  const forecast = weatherForecast.list.map((item, i) => {
    const date = new Date(item.dt_txt)
    const weekday = date.toLocaleDateString('en', { weekday: 'long' })
    const numberday = date.toLocaleDateString('en', { day: 'numeric' })
    const month = date.getMonth()

    return {
      numberday,
      weekday,
      month,
      temp: item.main.temp,
      pressure: item.main.pressure,
      humidity: item.main.humidity,
      icon: item.weather[0].icon
    }
  })

  return {
    type: RECEIVE_FORECAST,
    payload: {
      isLoaded,
      forecast
    }
  }
}

export const requestWeather = isLoaded => ({
  type: REQUEST_WEATHER,
  isLoaded
})

const APPID = '1713de24b31c3508f06044a0598fa751'
const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast'
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather'

export const fetchForecast = (name, byId) => async (dispatch, getState) => {
  try {
    dispatch(requestWeather(false))

    if (byId) {
      const [weatherCurrent, weatherForecast] = await request([
        `${weatherUrl}?id=${name}&units=metric&appid=${APPID}`,
        `${forecastUrl}?id=${name}&units=metric&appid=${APPID}`
      ])
      dispatch(receiveWeather(true, weatherCurrent))
      dispatch(receiveForecast(true, weatherForecast))
    } else {
      const [weatherCurrent, weatherForecast] = await request([
        `${weatherUrl}?q=${name}&units=metric&appid=${APPID}`,
        `${forecastUrl}?q=${name}&units=metric&appid=${APPID}`
      ])
      dispatch(receiveWeather(true, weatherCurrent))
      dispatch(receiveForecast(true, weatherForecast))
      dispatch(push(`/town-page/${weatherCurrent.id}`))
    }
  } catch (error) {
    const { name, message } = error

    dispatch(fetchWeatherFailure(name, message))
  }
}
