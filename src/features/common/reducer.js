import { GET_TOWN_WEATHER_FORECAST } from './action-types'

export const commonReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TOWN_WEATHER_FORECAST:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
