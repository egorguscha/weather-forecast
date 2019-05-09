import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CommonTemplate } from '../temlpates'
import { TownsFilter } from '../organisms'
import {
  CommonContainer,
  CustomTable,
  TableBody,
  TableBodyCell,
  TableRow,
  TableHead
} from '@ui/atoms'
import { fetchCities } from '../actions'
import { Pagination } from '../molecules'
import { Preloader } from '@ui/molecules'
import { paginationSelector } from '../selectors'

class TownsPageView extends Component {
  componentDidMount() {
    const { dispatch, isLoaded } = this.props

    if (!isLoaded) {
      this.props.dispatch(fetchCities())
    }
  }

  render() {
    const {
      isLoaded,
      pageLimit: { pageItemsLimit = [] }
    } = this.props

    if (!isLoaded) {
      return (
        <CommonTemplate>
          <Preloader />
        </CommonTemplate>
      )
    }
    return (
      <CommonTemplate>
        <CommonContainer>
          <CustomTable>
            <TableHead>
              <TableRow>
                <TownsFilter />
              </TableRow>
            </TableHead>
            <TableBody>
              {pageItemsLimit.map(({ id, rank, name, temperature }) => (
                <TableRow key={id}>
                  <TableBodyCell>{rank}</TableBodyCell>
                  <TableBodyCell>{name}</TableBodyCell>
                  <TableBodyCell>{temperature} &#176;С</TableBodyCell>
                </TableRow>
              ))}
            </TableBody>
          </CustomTable>
          <Pagination />
        </CommonContainer>
      </CommonTemplate>
    )
  }
}

TownsPageView.defaultProps = {}

TownsPageView.propTypes = {}

const mapStateToProps = state => ({
  pageLimit: paginationSelector(state),
  isLoaded: state.filter.isLoaded
})

export const TownsPage = connect(mapStateToProps)(TownsPageView)
