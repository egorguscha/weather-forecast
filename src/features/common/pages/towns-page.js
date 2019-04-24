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

class TownsPageView extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCities())
  }

  render() {
    const { pageItemsLimit = [], ...restPagination } = this.props.pagination
    const { isLoaded } = this.props
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
              {pageItemsLimit.map(item => (
                <TableRow key={item.id}>
                  <TableBodyCell>{item.rank}</TableBodyCell>
                  <TableBodyCell>{item.name}</TableBodyCell>
                  <TableBodyCell>{item.temperature} &#176;С</TableBodyCell>
                </TableRow>
              ))}
            </TableBody>
          </CustomTable>
          <Pagination {...restPagination} />
        </CommonContainer>
      </CommonTemplate>
    )
  }
}

TownsPageView.defaultProps = {}

TownsPageView.propTypes = {}

const mapStateToProps = state => ({
  pagination: state.pagination,
  isLoaded: state.filter.isLoaded
})

export const TownsPage = connect(mapStateToProps)(TownsPageView)
