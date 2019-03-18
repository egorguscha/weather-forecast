import React from 'react'
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Search } from '@ui'
import { fetchWeatherForecast } from '../actions'
import { withRouter, Redirect } from 'react-router-dom'
import { compose } from 'recompose'

const SearchableBoxView = createReactClass({
  getInitialState() {
    return {
      value: ''
    }
  },
  handleSubmit(event) {
    const { dispatch } = this.props
    const { value } = this.state

    event.preventDefault()
    dispatch(fetchWeatherForecast(value))
  },
  handleChange(event) {
    const value = event.target.value

    this.setState({ value })
  },
  render() {
    const { value } = this.state

    return (
      <Search
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        value={value}
      />
    )
  }
})

SearchableBoxView.defaultProps = {}
SearchableBoxView.propTypes = {}

const enhance = compose(connect())

export const SearchableBox = enhance(SearchableBoxView)
