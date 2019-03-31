import {
  FILTER_RANK_HIGH,
  FILTER_NAME_HIGH,
  FILTER_TEMPERATURE_HIGH,
  FILTER_WEATHER_PARAMS
} from '../action-types'
import { computePages } from './cities-pagination'

const sortByWeatherParams = (paramName, getState) => {
  const {
    filter: { cities }
  } = getState()

  switch (paramName) {
    case FILTER_TEMPERATURE_HIGH:
      cities.sort((paramA, paramB) => paramB.temperature - paramA.temperature)
      return cities
    case FILTER_RANK_HIGH:
      cities.sort((paramA, paramB) => paramB.rank - paramA.rank)
      return cities
    case FILTER_NAME_HIGH:
      cities.sort((paramA, paramB) => {
        if (paramA.name > paramB.name) {
          return 1
        }
        if (paramA.name < paramB.name) {
          return -1
        }
        return 0
      })
      return cities
    default:
      return cities
  }
}

export const filterWeatherParams = filterType => (dispatch, getState) => {
  const {
    pagination: { currentPage }
  } = getState()

  const sorted = sortByWeatherParams(filterType, getState)

  dispatch({
    type: FILTER_WEATHER_PARAMS,
    filterType,
    sorted
  })
  dispatch(computePages(currentPage))
}
