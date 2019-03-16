import React from 'react'
import styled from 'styled-components'
import { H1 } from '../atoms'
import { PrimaryWeatherParams, WeatherIconWrapper } from '../molecules'

const WrapperTownHead = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
`
export const TownHead = ({ title, weatherParams }) => (
  <WrapperTownHead>
    <H1>Town name</H1>
    <PrimaryWeatherParams>
      <WeatherIconWrapper>100</WeatherIconWrapper>
      <WeatherIconWrapper icon={'http://openweathermap.org/img/w/10d.png'} />
    </PrimaryWeatherParams>
  </WrapperTownHead>
)
