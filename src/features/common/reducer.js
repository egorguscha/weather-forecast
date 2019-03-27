import {
  RECEIVE_CURRENT_WEATHER,
  REQUEST_WEATHER,
  RECEIVE_FORECAST,
  RECEIVE_DAILY_WEATHER,
  FILTER_BY_DEFINITION,
  REQUEST_CITIES,
  RECEIVE_CITIES,
  GET_PAGES
} from './action-types'

// pagination
const initialStatePagination = {
  initialPage: 1,
  currentPage: 1,
  pageSize: 10,
  totalPages: 0
}

export const paginationReducer = (state = initialStatePagination, action) => {
  switch (action.type) {
    case GET_PAGES:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

// Filter

const initialState = {
  cities: [],
  filterType: null
}
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CITIES:
      return { ...state, isLoaded: action.isLoaded }
    case RECEIVE_CITIES:
      return { ...state, isLoaded: action.isLoaded, cities: action.cities }
    case FILTER_BY_DEFINITION:
      return {
        ...state,
        filterType: action.filterType,
        cities: [...action.sorted]
      }
    default:
      return state
  }
}

// weather forecast

export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return { ...state, isLoaded: action.isLoaded }
    case RECEIVE_CURRENT_WEATHER:
      return {
        ...state,
        currentlyWeather: { ...action.currentlyWeather },
        isLoaded: action.isLoaded
      }
    case RECEIVE_DAILY_WEATHER:
      return {
        ...state,
        dailyWeather: [...action.dailyWeather],
        isLoaded: action.isLoaded
      }
    case RECEIVE_FORECAST:
      return {
        ...state,
        hourly: action.hourlyForecast,
        isLoaded: action.isLoaded
      }
    default:
      return state
  }
}

export const getWeather = state => state.weather
export const getForecast = state => state.days
