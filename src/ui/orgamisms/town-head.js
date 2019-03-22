import React from 'react'
import styled from 'styled-components'
import { H1 } from '../atoms'
import { PrimaryWeatherParams, WeatherIconWrapper } from '../molecules'

const WrapperTownHead = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-columns: minmax(10rem, auto);
  margin: 2rem 0;
  justify-content: center;
  text-align: center;
`
export const TownHead = ({ timezone, temperature, img }) => (
  <WrapperTownHead>
    <H1>{timezone}</H1>
    <PrimaryWeatherParams>
      <WeatherIconWrapper>{temperature}</WeatherIconWrapper>
      <WeatherIconWrapper
        icon={`https://darksky.net/images/weather-icons/${img}.png`}
      />
    </PrimaryWeatherParams>
  </WrapperTownHead>
)
