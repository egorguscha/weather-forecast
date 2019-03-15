import React from 'react'
import { HeaderWrapper, Time, NavLink } from '../atoms'
import { Menu } from '../molecules'

export const Header = ({ children }) => (
  <HeaderWrapper>
    <Time>Time</Time>
    <Menu>
      <NavLink href="#">Main</NavLink>
      <NavLink href="#">Towns</NavLink>
      <NavLink href="#">About us</NavLink>
    </Menu>
  </HeaderWrapper>
)
