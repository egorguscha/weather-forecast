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

const TownsPageView = createReactClass({
  getInitialState() {
    return {}
  },
  componentDidMount() {
    this.props.dispatch(fetchCities())
  },

  render() {
    const { cities } = this.props

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
              {cities.map(item => (
                <TableRow key={item.id}>
                  <TableBodyCell>{item.rank}</TableBodyCell>
                  <TableBodyCell>{item.name}</TableBodyCell>
                  <TableBodyCell>{item.temperature} &#176;С</TableBodyCell>
                  <TableBodyCell>222 Pa</TableBodyCell>
                  <TableBodyCell>40 km</TableBodyCell>
                  <TableBodyCell>5 m/s</TableBodyCell>
                  <TableBodyCell>10 %</TableBodyCell>
                </TableRow>
              ))}
            </TableBody>
          </CustomTable>
        </CommonContainer>
      </CommonTemplate>
    )
  }
})

TownsPageView.defaultProps = {}

TownsPageView.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  console.log(state.filter.cities)
  return {
    cities: state.filter.cities
  }
}

export const TownsPage = connect(mapStateToProps)(TownsPageView)
