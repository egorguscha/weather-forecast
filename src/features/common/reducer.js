import {
  REQUEST_WEATHER,
  FILTER_BY_DEFINITION,
  REQUEST_CITIES,
  RECEIVE_CITIES,
  SET_PAGES,
  RECEIVE_WEATHER_CURRENT,
  RECEIVE_WEATHER_DAILY,
  RECEIVE_WEATHER_FORECAST
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
    case SET_PAGES:
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
    case RECEIVE_WEATHER_CURRENT:
      return {
        ...state,
        currentlyWeather: { ...action.currentlyWeather },
        isLoaded: action.isLoaded
      }
    case RECEIVE_WEATHER_DAILY:
      return {
        ...state,
        dailyWeather: [...action.dailyWeather],
        isLoaded: action.isLoaded
      }
    case RECEIVE_WEATHER_FORECAST:
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
