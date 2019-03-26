import { request } from './request'
import { push } from 'connected-react-router'
import moment from 'moment'
import {
  RECEIVE_CURRENT_WEATHER,
  REQUEST_WEATHER,
  RECEIVE_FORECAST,
  FETCH_WEATHER_FAILURE,
  RECEIVE_DAILY_WEATHER,
  FILTER_RANK_HIGH,
  FILTER_HUMIDITY_HIGH,
  FILTER_TEMPERATURE_HIGH,
  FILTER_NAME_HIGH,
  FILTER_VISIBILITY_HIGH,
  FILTER_WIND_HIGH,
  FILTER_BY_DEFINITION,
  RECEIVE_CITIES,
  REQUEST_CITIES
} from './action-types'

const ACCUWEATHER_API =
  'http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=naPFdtrvkmxrow59RA21sJmnezgsvMDP'
const GEOCODE_URL = 'https://api.opencagedata.com/geocode/v1/json'
const GEOCODE_API_KEY = 'a93d9ec6f5ad4878a4f9a27ce4d25555'
const WEATHER_API_KEY = 'def2d9fbc43df19e45574cf1265307db'
const proxy = 'http://cors-anywhere.herokuapp.com/'

//filter

export const filters = {
  FILTER_RANK_HIGH,
  FILTER_HUMIDITY_HIGH,
  FILTER_TEMPERATURE_HIGH,
  FILTER_NAME_HIGH,
  FILTER_VISIBILITY_HIGH,
  FILTER_WIND_HIGH
}

export const receiveCities = (cities, isLoaded) => {
  let citiesList = cities.map((item, i) => {
    const {
      Key,
      EnglishName,
      Temperature: {
        Metric: { Value }
      }
    } = item
    return {
      rank: i + 1,
      id: Key,
      name: EnglishName,
      temperature: Value
    }
  })

  return {
    type: RECEIVE_CITIES,
    cities: citiesList,
    isLoaded
  }
}

export const requestCities = isLoaded => ({
  type: REQUEST_CITIES,
  isLoaded
})

export const fetchCities = () => async (dispatch, getState) => {
  try {
    dispatch(requestCities(false))
    const cities = await request(ACCUWEATHER_API)
    dispatch(receiveCities(cities, true))
  } catch (error) {
    console.log(error)
  }
}

const sortMachine = (sortType, getState) => {
  const {
    filter: { cities }
  } = getState()

  switch (sortType) {
    case FILTER_HUMIDITY_HIGH:
      cities.sort((a, b) => b.humidity - a.humidity)
      return cities
    case FILTER_TEMPERATURE_HIGH:
      cities.sort((a, b) => b.temperature - a.temperature)
      return cities
    case FILTER_VISIBILITY_HIGH:
      cities.sort((a, b) => b.visibility - a.visibility)
      return cities
    case FILTER_WIND_HIGH:
      cities.sort((a, b) => b.wind - a.wind)
      return cities
    case FILTER_RANK_HIGH:
      cities.sort((a, b) => b.rank - a.rank)
      return cities
    case FILTER_NAME_HIGH:
      cities.sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0
      })
      return cities
    default:
      return cities
  }
}

export const filterByDefinition = filterType => (dispatch, getState) => {
  const sorted = sortMachine(filterType, getState)
  dispatch({
    type: FILTER_BY_DEFINITION,
    filterType,
    sorted
  })
}

// town detail && main

export const fetchWeatheFailure = (name, message) => ({
  type: FETCH_WEATHER_FAILURE,
  name,
  message
})

export const receiveCurrentWeather = (isLoaded, { timezone, currently }) => {
  const { icon, temperature } = currently

  return {
    type: RECEIVE_CURRENT_WEATHER,
    isLoaded,
    currentlyWeather: {
      timezone,
      img: icon,
      temperature
    }
  }
}

export const receiveDailyWeather = (isLoaded, { daily }) => {
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
    type: RECEIVE_DAILY_WEATHER,
    isLoaded,
    dailyWeather
  }
}

export const receiveForecast = (isLoaded, { hourly }) => {
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
    type: RECEIVE_FORECAST,
    isLoaded,
    hourlyForecast
  }
}

export const requestWeather = isLoaded => ({
  type: REQUEST_WEATHER,
  isLoaded
})

export const fetchForecast = (coords, allowRedirect) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(requestWeather(false))

    const { latitude, longitude, ...otherProps } = await request(
      `${proxy}https://api.darksky.net/forecast/${WEATHER_API_KEY}/${coords}?units=si&extend=hourly`
    )

    dispatch(receiveCurrentWeather(true, otherProps))
    dispatch(receiveDailyWeather(true, otherProps))
    dispatch(receiveForecast(true, otherProps))

    if (!allowRedirect) {
      dispatch(push(`/town-page/${latitude},${longitude}`))
    }
  } catch (error) {
    const { name, message } = error

    dispatch(fetchWeatheFailure(name, message))
  }
}

export const fetchGeocode = name => async (dispatch, getState) => {
  try {
    const response = await request(
      `${GEOCODE_URL}?key=${GEOCODE_API_KEY}&q=${name}&no_annotations=1&limit=1`
    )
    const coords = response.results[0].geometry

    dispatch(fetchForecast(`${coords.lat},${coords.lng}`))
  } catch (error) {
    const { name, message } = error

    dispatch(fetchWeatheFailure(name, message))
  }
}
