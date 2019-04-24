import { SET_PAGES } from '../action-types'

const initialState = {
  initialPage: 1,
  currentPage: 1,
  pageSize: 10,
  totalPages: 0
}

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGES:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
