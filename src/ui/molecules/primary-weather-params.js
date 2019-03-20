import React from 'react'
import styled from 'styled-components'

const WrapperWeatherParams = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 3.2rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const PrimaryWeatherParams = ({ children }) => (
  <WrapperWeatherParams>{children}</WrapperWeatherParams>
)
