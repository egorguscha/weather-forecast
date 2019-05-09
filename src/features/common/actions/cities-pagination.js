import { SET_PAGES } from '../action-types'

export const computePages = specifiedPage => (dispatch, getState) => {
  const {
    filter: { cities },
    pagination: { currentPage, pageSize }
  } = getState()
  const pageNumber = specifiedPage || currentPage
  const totalPages = Math.ceil(cities.length / pageSize)
  const startIndexItem = (pageNumber - 1) * pageSize
  const endIndexItem = startIndexItem + pageSize
  const pageItemsLimit = cities.slice(startIndexItem, endIndexItem)
  let startPage
  let endPage

  if (totalPages <= 7) {
    startPage = 1
    endPage = totalPages
  } else {
    if (pageNumber <= 5) {
      startPage = 1
      endPage = 7
    } else if (pageNumber + 2 >= totalPages) {
      startPage = totalPages - 6
      endPage = totalPages
    } else {
      startPage = pageNumber - 3
      endPage = pageNumber + 3
    }
  }

  const pages = [...Array(endPage + 1 - startPage).keys()].map(
    item => startPage + item
  )

  dispatch({
    type: SET_PAGES,
    payload: {
      pages,
      pageItemsLimit,
      currentPage: pageNumber,
      pageSize,
      totalPages
    }
  })
}
