import React from 'react'
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
import createReactClass from 'create-react-class'
import { Pagination } from '../molecules'

const TownsPageView = createReactClass({
  getInitialState() {
    return {}
  },
  componentDidMount() {
    this.props.dispatch(fetchCities())
  },

  render() {
    const { pageItemsLimit = [], ...restPagination } = this.props.pagination

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
})

TownsPageView.defaultProps = {}

TownsPageView.propTypes = {}

const mapStateToProps = (state, ownProps) => ({
  pagination: state.pagination
})

export const TownsPage = connect(mapStateToProps)(TownsPageView)
