import React from 'react'
import PropTypes from 'prop-types'
import { CommonTemplate } from '../templates'
import { Grid } from '@ui/grid'
import { TownHead, WeatherCard, WeatherCardList } from '@ui'
export const TownDetail = () => (
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

TownDetail.defaultProps = {}

TownDetail.propTypes = {}
