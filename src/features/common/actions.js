import {
  GET_TOWN_WEATHER_FORECAST,
  GET_TOWN_WEATHER_FORECAST_ERROR
} from './action-types'
import { push } from 'connected-react-router'

const APPID = '1713de24b31c3508f06044a0598fa751'
const URL = 'http://api.openweathermap.org/data/2.5/forecast'

export const fetchWeatherForecast = name => async (dispatch, getState) => {
  try {
    const response = await fetch(`${URL}?q=${name}&appid=${APPID}`)
    if (!response.ok) {
      throw new Error('City not found')
    }
    const data = await response.json()
    dispatch({ type: GET_TOWN_WEATHER_FORECAST, payload: data })
    const townId = getState().town.city.id
    dispatch(push(`/town-page/${townId}`))
    // console.log(townId)
  } catch (error) {
    dispatch({ type: GET_TOWN_WEATHER_FORECAST_ERROR, error: error.message })
  }
}
