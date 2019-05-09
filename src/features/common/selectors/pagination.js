import { createSelector } from 'reselect'

export const paginationSelector = createSelector(
  state => state.pagination,
  pagination => pagination
)
