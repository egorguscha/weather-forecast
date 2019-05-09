import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { HourlyForecast } from '../organisms'
import { CommonTemplate } from '../temlpates'
import { fetchWeather } from '../actions'
import { weatherSelector } from '../selectors'
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
      currentlyWeather: { timezone, temperature, img },
      dailyWeather = [],
      hourly = new Map()
    } = this.props.forecast
    const date = new Date()
    const today = date.getDate()

    if (!isLoaded) {
      return (
        <CommonTemplate>
          <Preloader />
        </CommonTemplate>
      )
    }
    return (
      <CommonTemplate>
        <TownHead timezone={timezone} temperature={temperature} img={img} />
        {dailyWeather.map(
          ({
            time,
            weekday,
            month,
            day,
            temperatureMax,
            temperatureMin,
            pressure,
            visibility,
            windSpeed
          }) => {
            const checkHourly = hourly.has(weekday) ? hourly.get(weekday) : []
            const checkDay = today.toString() === day

            return (
              <WeatherCard key={time}>
                <WeatherCardHead
                  weekday={weekday}
                  month={month}
                  day={day}
                  temperatureMax={temperatureMax}
                  temperatureMin={temperatureMin}
                  currentDay={checkDay}
                />
                <WeatherParamList>
                  <WeatherParam label={'Pressure'} value={`${pressure} hPa`} />
                  <WeatherParam
                    label={'Visibility'}
                    value={`${visibility} km`}
                  />
                  <WeatherParam
                    label={'Wind speed'}
                    value={`${windSpeed} m/s`}
                  />
                </WeatherParamList>

                <HourlyForecast hourly={checkHourly} />
              </WeatherCard>
            )
          }
        )}
      </CommonTemplate>
    )
  }
}

const mapStateToProps = state => ({
  forecast: weatherSelector(state)
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
