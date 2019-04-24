import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { HourlyForecast } from '../organisms'
import { CommonTemplate } from '../temlpates'
import { fetchWeather } from '../actions'
import { getWeather } from '../selectors'
import { TownHead, WeatherCard, WeatherParamList } from '@ui/orgamisms'
import { WeatherCardHead, WeatherParam } from '@ui/molecules'
import { Preloader } from '@ui/molecules'
import { ErrorBoundary } from '../organisms'

class TownPageView extends Component {
  componentDidMount() {
    const {
      forecast,
      match: {
        params: { id }
      },
      fetchWeather
    } = this.props

    if (!forecast.isLoaded) {
      fetchWeather(id, true)
    }
  }

  render() {
    const {
      isLoaded,
      currentlyWeather = {},
      dailyWeather = [],
      hourly = new Map()
    } = this.props.forecast
    const date = new Date()
    const day = date.getDate()

    if (!isLoaded) {
      return (
        <CommonTemplate>
          <Preloader />
        </CommonTemplate>
      )
    }
    return (
      <CommonTemplate>
        <TownHead {...currentlyWeather} />
        {dailyWeather.map(daily => (
          <WeatherCard key={daily.time}>
            <WeatherCardHead
              {...daily}
              currentDay={day.toString() === daily.day}
            />
            <WeatherParamList>
              <WeatherParam
                label={'Pressure'}
                value={`${daily.pressure} hPa`}
              />
              <WeatherParam
                label={'Visibility'}
                value={`${daily.visibility} km`}
              />
              <WeatherParam
                label={'Wind speed'}
                value={`${daily.windSpeed} m/s`}
              />
            </WeatherParamList>

            <HourlyForecast
              hourly={
                hourly.has(daily.weekday) ? hourly.get(daily.weekday) : []
              }
            />
          </WeatherCard>
        ))}
      </CommonTemplate>
    )
  }
}

const mapStateToProps = state => ({
  forecast: getWeather(state)
})
const mapDispatchToProps = dispatch => ({
  fetchWeather: (id, byId) => dispatch(fetchWeather(id, byId))
})

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const TownPage = enhance(TownPageView)
