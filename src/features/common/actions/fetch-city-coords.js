import { request } from '../request'
import { requestWeather } from './request-weather'
import { fetchWeatherFailure } from './fetch-weather-failure'
import { fetchWeather } from './fetch-weather'
import { errorSignal } from './error-signal'
const GEOCODE_URL = 'https://api.opencagedata.com/geocode/v1/json'
const GEOCODE_API_KEY = 'a93d9ec6f5ad4878a4f9a27ce4d25555'

export const fetchCityCoords = name => async dispatch => {
  try {
    dispatch(requestWeather(false))

    const response = await request(
      `${GEOCODE_URL}?key=${GEOCODE_API_KEY}&q=${name}&no_annotations=1&limit=1`
    )
    if (response.results.length === 0) {
      throw new Error('Something went wrong')
    }

    const coords = response.results[0].geometry
    dispatch(fetchWeather(`${coords.lat},${coords.lng}`))
  } catch (error) {
    const { name, message } = error

    dispatch(errorSignal(name, message))
  }
}
