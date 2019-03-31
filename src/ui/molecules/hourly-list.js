import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HourlyWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  padding: 1.5rem 2rem;
  grid-template-columns: repeat(24, 9rem);
  overflow-x: auto;
  overflow-y: hidden;
  grid-auto-rows: 15rem;
  transition: 0.3s;

  ${({ state }) =>
    state === 'entering'
      ? 'opacity: 0; height: 0;'
      : state === 'entered'
      ? 'opacity:1;height: auto;'
      : null};
`
// ${({ state }) =>
//   state === 'entering'
//     ? 'transform: translateY(-100%); '
//     : state === 'entered'
//     ? 'transform: translateY(0);'
//     : null};
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

export const HourlyList = ({ children, animationState }) => (
  <HourlyWrapper state={animationState}>{children}</HourlyWrapper>
)

HourlyColumn.propTypes = {
  children: PropTypes.node.isRequired
}
HourlyList.propTypes = {
  children: PropTypes.node.isRequired,
  animationState: PropTypes.string.isRequired
}
