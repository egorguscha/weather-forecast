import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@ui/grid'
import { TownHead, WeatherCard, WeatherCardList, WeatherParam } from '@ui'
import { CommonTemplate } from '../temlpates'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import createReactClass from 'create-react-class'
import { fetchForecast } from '../actions.js'
import { getWeather, getForecast } from '../reducer'

const TownPageView = createReactClass({
  getInitialState() {
    return {}
  },
  componentDidMount() {
    const {
      townWeather,
      match: {
        params: { id }
      },
      fetchForecast
    } = this.props

    if (!townWeather.weather) {
      fetchForecast(id, true)
    }
  },

  render() {
    const { isLoaded, weather } = this.props.townWeather

    if (!isLoaded) {
      return (
        <CommonTemplate>
          <Grid.Wrapper>
            <TownHead title="Loading..." />
          </Grid.Wrapper>
        </CommonTemplate>
      )
    }
    const { name, temp, icon } = weather
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
    townWeather: getWeather(state),
    townForecast: getForecast(state)
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
