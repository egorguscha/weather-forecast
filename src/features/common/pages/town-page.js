import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import createReactClass from 'create-react-class'
import { HourlyForecast } from '../organisms'
import { CommonTemplate } from '../temlpates'
import { fetchWeather } from '../actions'
import { getWeather } from '../reducer'
import { TownHead, WeatherCard, WeatherParamList } from '@ui/orgamisms'
import { WeatherCardHead, WeatherParam } from '@ui/molecules'
import { Preloader } from '@ui/molecules'
import { ErrorBoundary } from '../organisms'

const TownPageView = createReactClass({
  getInitialState() {
    return {}
  },
  componentDidMount() {
    const {
      forecast,
      match: {
        params: { id }
      },
      fetchForecast
    } = this.props

    if (!Object.keys(forecast).length) {
      fetchWeather(id, true)
    }
  },

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
})

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
