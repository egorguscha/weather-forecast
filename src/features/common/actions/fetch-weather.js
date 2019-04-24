import { request } from '../request'
import { push } from 'connected-react-router'
import { fetchWeatherFailure } from './fetch-weather-failure'
import { receiveWeatherDaily } from './receive-weather-daily'
import { receiveWeatherCurrent } from './receive-weather-current'
import { receiveWeatherForecast } from './receive-weather-forecast'
import { requestWeather } from './request-weather'
const WEATHER_API_KEY = 'def2d9fbc43df19e45574cf1265307db'
const proxy = 'http://cors-anywhere.herokuapp.com/'

// TODO: transform binary function to unary
export const fetchWeather = (coords, allowRedirect) => async dispatch => {
  try {
    // dispatch(requestWeather(false))
    const { latitude, longitude, ...otherProps } = await request(
      `${proxy}https://api.darksky.net/forecast/${WEATHER_API_KEY}/${coords}?units=si&extend=hourly`
    )

    dispatch(receiveWeatherCurrent(true, otherProps))
    dispatch(receiveWeatherDaily(true, otherProps))
    dispatch(receiveWeatherForecast(true, otherProps))

    if (!allowRedirect) {
      dispatch(push(`/town-page/${latitude},${longitude}`))
    }
  } catch (error) {
    const { name, message } = error

    dispatch(fetchWeatherFailure(name, message))
  }
}
