import React from 'react'
import styled from 'styled-components'
import {
  HourlyList,
  HourlyColumn,
  HourlySubItem,
  ButtonHourly,
  WeatherIconDaily
} from '@ui'

const HourlyForecastWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'hourly-list'
    'hourly-button';
`

export const HourlyForecast = ({ hourly }) => {
  console.log(hourly)
  return (
    <HourlyForecastWrapper>
      <HourlyList>
        {hourly.map(({ temperature, icon, id, timeHourly }, i) => (
          <HourlyColumn key={`${id}-s${i}`}>
            <HourlySubItem>{temperature} &#176;</HourlySubItem>
            <HourlySubItem>
              <WeatherIconDaily
                src={
                  icon && `https://darksky.net/images/weather-icons/${icon}.png`
                }
              />
            </HourlySubItem>
            <HourlySubItem>{timeHourly}</HourlySubItem>
          </HourlyColumn>
        ))}
      </HourlyList>
      <ButtonHourly
        borderRadius={[0, 0, 25, 25]}
        hover={'#ff9f1c'}
        initial={'#ffc16e'}
        active={'#e8911a'}
        color={'#fff'}
      >
        Hourly forecast
      </ButtonHourly>
    </HourlyForecastWrapper>
  )
}
