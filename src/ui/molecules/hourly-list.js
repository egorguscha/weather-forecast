import React from 'react'
import styled from 'styled-components'

const HourlyWrapper = styled.div`
  display: grid;
  padding: 1.5rem 2rem;
  grid-template-columns: repeat(24, 9rem);
  overflow-x: auto;
  grid-auto-rows: 15rem;
`
const HourlyColumnWrapper = styled.div`
  display: grid;
  border-right: 1px solid #e0e0e0;
  text-align: center;

  &:last-child {
    border-right: none;
  }
`

export const HourlyColumn = ({ children }) => (
  <HourlyColumnWrapper>{children}</HourlyColumnWrapper>
)

export const HourlyList = ({ children }) => (
  <HourlyWrapper>{children}</HourlyWrapper>
)
