import {
  GET_TOWN_WEATHER_FORECAST,
  GET_TOWN_WEATHER_FORECAST_ERROR
} from './action-types'

export const commonReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TOWN_WEATHER_FORECAST:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const errorReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TOWN_WEATHER_FORECAST_ERROR:
      return action.error
    default:
      return null
  }
}

export const getTownWeather = ({ town }) => {
  if (town.city) {
    return {
      id: town.city.id,
      town
    }
  }
  return {
    town
  }
}
