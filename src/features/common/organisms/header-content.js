import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Time, NavLink } from '@ui/atoms'
import { Menu } from '@ui/molecules'

export const HeaderContent = () => (
  <>
    <Time>17:00</Time>
    <Menu>
      <NavLink as={Link} to="/">
        Main
      </NavLink>
      <NavLink as={Link} to="/towns">
        Towns
      </NavLink>
      <NavLink as={Link} to="/about-us">
        About us
      </NavLink>
    </Menu>
  </>
)

HeaderContent.defaultProps = {}

HeaderContent.propTypes = {}
