import { request } from './request'
import { push } from 'connected-react-router'

import {
  RECEIVE_WEATHER,
  REQUEST_WEATHER,
  FETCH_WEATHER_FAILURE
} from './action-types'

export const fetchWeatherFailure = (name, message) => ({
  type: FETCH_WEATHER_FAILURE,
  name,
  message
})

export const receiveWeather = (isLoaded, weatherCurrent, weatherForecast) => ({
  type: RECEIVE_WEATHER,
  payload: {
    isLoaded,
    weatherCurrent,
    weatherForecast
  }
})

export const requesWeather = isLoaded => ({
  type: REQUEST_WEATHER,
  isLoaded
})

const APPID = '1713de24b31c3508f06044a0598fa751'
const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast'
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather'

export const fetchForecast = (name, byId) => async (dispatch, getState) => {
  try {
    dispatch(requesWeather(false))

    if (byId) {
      const [weatherCurrent, weatherForecast] = await request([
        `${weatherUrl}?id=${name}&units=metric&appid=${APPID}`,
        `${forecastUrl}?id=${name}&units=metric&appid=${APPID}`
      ])
      dispatch(receiveWeather(true, weatherCurrent, weatherForecast))
    } else {
      const [weatherCurrent, weatherForecast] = await request([
        `${weatherUrl}?q=${name}&units=metric&appid=${APPID}`,
        `${forecastUrl}?q=${name}&units=metric&appid=${APPID}`
      ])
      dispatch(receiveWeather(true, weatherCurrent, weatherForecast))
      dispatch(push(`/town-page/${weatherCurrent.id}`))
    }
  } catch (error) {
    const { name, message } = error

    dispatch(fetchWeatherFailure(name, message))
  }
}

export const fetchForecastById = id => async (dispatch, getState) => {
  try {
    dispatch(requesWeather(false))

    const forecast = await request(
      `${forecastUrl}?id=${id}&units=metric&appid=${APPID}`
    )

    dispatch(receiveWeather(true, forecast))
  } catch (error) {
    const { name, message } = error

    dispatch(fetchWeatherFailure(name, message))
  }
}
