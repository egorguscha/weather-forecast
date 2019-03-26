import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import createReactClass from 'create-react-class'
import { HourlyForecast } from '../organisms'
import { CommonTemplate } from '../temlpates'
import { fetchForecast } from '../actions.js'
import { getWeather, getForecast } from '../reducer'
import { Grid } from '@ui/grid'
import { TownHead, WeatherCard, WeatherParamList } from '@ui/orgamisms'
import { WeatherCardHead, WeatherParam } from '@ui/molecules'

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
      fetchForecast(id, true)
    }
  },
  handleClick() {
    console.log(1)
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
          <Grid.Wrapper>
            <TownHead title="Loading..." />
          </Grid.Wrapper>
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
  fetchForecast: (id, byId) => dispatch(fetchForecast(id, byId))
})

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const TownPage = enhance(TownPageView)
