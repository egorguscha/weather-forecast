// import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  grid-area: button;
  border: none;
  transition: .2s
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`

export const ButtonPrimary = styled(Button)`
  color: ${({ color }) => color || '#000'};
  background: ${({ initial }) => initial || '#000'};
  ${({ borderRadius }) =>
    borderRadius && borderRadius.length > 1
      ? `border-radius:
          ${borderRadius[0]}px
          ${borderRadius[1]}px
          ${borderRadius[2]}px
          ${borderRadius[3]}px
        `
      : borderRadius
      ? `border-radius: ${borderRadius}px`
      : null};
  &:hover {
    background: ${({ hover }) => hover || '#000'};
  }
  &:active {
    background: ${({ active }) => active || '#000'};
  }
`

export const ButtonHourly = styled(ButtonPrimary)`
  grid-area: hourly-button;
  height: 2.5rem;
  width: 100%;
`
