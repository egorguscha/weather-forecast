import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TableHeadCell } from '@ui/atoms'
import { FilterHandler } from '../molecules'
import { filters } from '../actions'
import { FILTER_PRESSURE_HIGH } from '../action-types'

const columnNames = [
  'Rank',
  'Town',
  'Temperature',
  'Pressure',
  'Visibility',
  'Wind',
  'Humidity'
]

const {
  FILTER_NAME_HIGH,
  FILTER_TEMPERATURE_HIGH,
  FILTER_VISIBILITY_HIGH,
  FILTER_HUMIDITY_HIGH,
  FILTER_RANK_HIGH,
  FILTER_WIND_HIGH
} = filters

const TownsFilterView = () => (
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
    <TableHeadCell>
      <FilterHandler text=" Pressure" filterName={FILTER_PRESSURE_HIGH} />
    </TableHeadCell>
    <TableHeadCell>
      <FilterHandler text=" Visibility" filterName={FILTER_VISIBILITY_HIGH} />
    </TableHeadCell>
    <TableHeadCell>
      <FilterHandler text="Wind" filterName={FILTER_WIND_HIGH} />
    </TableHeadCell>
    <TableHeadCell>
      <FilterHandler text=" Humidity" filterName={FILTER_HUMIDITY_HIGH} />
    </TableHeadCell>
  </>
)

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export const TownsFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(TownsFilterView)
