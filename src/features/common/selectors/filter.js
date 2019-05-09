import { createSelector } from 'reselect'

export const filterSelector = createSelector(
  state => state.filter.filterType,
  filterType => filterType
)
