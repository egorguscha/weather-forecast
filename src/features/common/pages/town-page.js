import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@ui/grid'
import { TownHead, WeatherCard, WeatherCardList } from '@ui'
import { CommonTemplate } from '../temlpates'
import { getTownWeather } from '../reducer'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
const TownPageView = props => {
  console.log(props)

  return (
    <CommonTemplate>
      <Grid.Wrapper>
        <TownHead />
        <WeatherCardList>
          <WeatherCard currentDay />
          <WeatherCard />
        </WeatherCardList>
      </Grid.Wrapper>
    </CommonTemplate>
  )
}

TownPageView.defaultProps = {}

TownPageView.propTypes = {}

const mapStateToProps = (state, ownProps) => ({
  town: getTownWeather(state)
})
const enhance = compose(
  connect(mapStateToProps),
  withRouter
)

export const TownPage = enhance(TownPageView)
