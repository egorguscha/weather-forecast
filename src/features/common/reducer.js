import { RECEIVE_WEATHER, REQUEST_WEATHER } from './action-types'

export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_WEATHER:
      return { ...state, ...action.payload }
    case REQUEST_WEATHER:
      return { ...state, isLoaded: action.isLoaded }
    default:
      return state
  }
}

export const getWeather = ({ weather: { weatherCurrent, isLoaded } }) => {
  if (isLoaded) {
    const {
      name,
      main: { temp },
      weather: [{ icon }]
    } = weatherCurrent
    return {
      name,
      temp,
      icon,
      isLoaded
    }
  }
  return {
    weatherCurrent,
    isLoaded
  }
}

export const getForecast = state => {
  return {
    state
  }
}
