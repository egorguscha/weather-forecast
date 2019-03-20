import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@ui/grid'
import { TownHead, WeatherCard, WeatherCardList, WeatherParam } from '@ui'
import { CommonTemplate } from '../temlpates'
import { getWeather } from '../reducer'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import createReactClass from 'create-react-class'
import { fetchForecast } from '../actions.js'

const TownPageView = createReactClass({
  getInitialState() {
    return {}
  },
  componentDidMount() {
    const {
      weather: { weatherCurrent },
      match: {
        params: { id }
      },
      fetchForecast
    } = this.props

    if (!weatherCurrent) {
      fetchForecast(id, true)
    }
  },

  render() {
    const {
      weather: { isLoaded, name, temp, icon }
    } = this.props

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
          <TownHead
            title={name}
            temperature={temp}
            icon={`http://openweathermap.org/img/w/${icon}.png`}
          />
          <WeatherCardList>
            <WeatherCard currentDay>
              <WeatherParam />
              <WeatherParam />
              <WeatherParam />
            </WeatherCard>
          </WeatherCardList>
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
    weather: getWeather(state)
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
