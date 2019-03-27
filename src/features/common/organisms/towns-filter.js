import React from 'react'
import PropTypes from 'prop-types'

import { TableHeadCell } from '@ui/atoms'
import { FilterHandler } from '../molecules'
import { filters } from '../actions'

const { FILTER_NAME_HIGH, FILTER_TEMPERATURE_HIGH, FILTER_RANK_HIGH } = filters

export const TownsFilter = () => (
  <>
    <TableHeadCell>
      <FilterHandler text="Rank" filterName={FILTER_RANK_HIGH} />
    </TableHeadCell>
    <TableHeadCell>
      <FilterHandler text="Town" filterName={FILTER_NAME_HIGH} />
    </TableHeadCell>
    <TableHeadCell>
      <FilterHandler text=" Temperature" filterName={FILTER_TEMPERATURE_HIGH} />
    </TableHeadCell>
  </>
)
