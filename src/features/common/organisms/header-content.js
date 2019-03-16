import React from 'react'
import PropTypes from 'prop-types'
import { Time, Menu, NavLink } from '@ui'

export const HeaderContent = () => (
  <>
    <Time>17:00</Time>
    <Menu>
      <NavLink>Main</NavLink>
      <NavLink>Towns</NavLink>
      <NavLink>About us</NavLink>
    </Menu>
  </>
)

HeaderContent.defaultProps = {}

HeaderContent.propTypes = {}
