import React from 'react'
import styled from 'styled-components'
import { CardHeadTitle, H2, H3 } from '../atoms'

const WeatherCardHeadWrapper = styled.div`
  background: #46c9b5;
  padding: 1.5rem 2rem;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  color: #fff;
`

export const WeatherCardHead = ({
  dayName,
  month,
  dayNumber,
  temperature,
  currentDay
}) => (
  <WeatherCardHeadWrapper>
    <CardHeadTitle currentDay={currentDay}>Day name</CardHeadTitle>
    <H3 fontWeight={300}>m / dn</H3>
    <H2 fontWeight={300}>20 C</H2>
  </WeatherCardHeadWrapper>
)
