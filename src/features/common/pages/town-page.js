import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@ui/grid'
import {
  TownHead,
  WeatherCard,
  WeatherCardHead,
  WeatherParamList,
  WeatherParam
} from '@ui'
import { CommonTemplate } from '../temlpates'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import createReactClass from 'create-react-class'
import { fetchForecast } from '../actions.js'
import { getWeather, getForecast, getDaily } from '../reducer'

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
      dailyWeather = []
    } = this.props.forecast

    // const {
    //   time,
    //   weekday,
    //   month,
    //   day,
    //   icon,
    //   temperatureMax,
    //   temperatureMin,
    //   visibility,
    //   windSpeed
    // } = item

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
        <Grid.Wrapper>
          <TownHead {...currentlyWeather} />
          {dailyWeather.map(daily => (
            <WeatherCard key={daily.time}>
              <WeatherCardHead {...daily} />
              <WeatherParamList>
                <WeatherParam label={'Pressure'} value={daily.pressure} />
                <WeatherParam label={'Visibility'} value={daily.visibility} />
                <WeatherParam label={'Wind speed'} value={daily.windSpeed} />
              </WeatherParamList>
            </WeatherCard>
          ))}
        </Grid.Wrapper>
      </CommonTemplate>
    )
  }
})

TownPageView.defaultProps = {}

TownPageView.propTypes = {
  title: PropTypes.string,
  temperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string
}

const mapStateToProps = state => {
  return {
    forecast: getWeather(state)

    // townForecast: getForecast(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchForecast: (id, byId) => dispatch(fetchForecast(id, byId))
  }
}
const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const TownPage = enhance(TownPageView)
