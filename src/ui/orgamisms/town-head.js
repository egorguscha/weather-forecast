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
export const TownHead = ({ title, temperature, icon }) => (
  <WrapperTownHead>
    <H1>{title}</H1>
    <PrimaryWeatherParams>
      <WeatherIconWrapper>{temperature}</WeatherIconWrapper>
      <WeatherIconWrapper icon={icon} />
    </PrimaryWeatherParams>
  </WrapperTownHead>
)
