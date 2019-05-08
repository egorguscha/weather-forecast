import { request } from '../request'
import { push } from 'connected-react-router'
import { fetchWeatherFailure } from './fetch-weather-failure'
import { receiveWeatherDaily } from './receive-weather-daily'
import { receiveWeatherCurrent } from './receive-weather-current'
import { receiveWeatherForecast } from './receive-weather-forecast'

const WEATHER_API_KEY = 'def2d9fbc43df19e45574cf1265307db'
const proxy = 'http://cors-anywhere.herokuapp.com/'

// TODO: transform binary function to unary
export const fetchWeather = (coords, allowRedirect) => async dispatch => {
  try {
    const { latitude, longitude, ...otherProps } = await request(
      `${proxy}https://api.darksky.net/forecast/${WEATHER_API_KEY}/${coords}?units=si&extend=hourly`
    )
    // TODO: remove boolean arg
    dispatch(receiveWeatherCurrent(true, otherProps))
    dispatch(receiveWeatherDaily(true, otherProps))
    dispatch(receiveWeatherForecast(true, otherProps))

    if (!allowRedirect) {
      dispatch(push(`/town-page/${latitude},${longitude}`))
    }
  } catch (error) {
    const { name, message } = error
  }
}
