import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@ui/grid'
import { TownHead, WeatherCard, WeatherCardList } from '@ui'
import { CommonTemplate } from '../temlpates'

export const TownPage = () => (
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

TownPage.defaultProps = {}

TownPage.propTypes = {}
