import React from 'react'
import PropTypes from 'prop-types'
import { Container, Search } from '@ui'
import { CommonTemplate } from '../temlpates'

export const MainPage = () => (
  <CommonTemplate>
    <Container>
      <Search />
    </Container>
  </CommonTemplate>
)

MainPage.defaultProps = {}

MainPage.propTypes = {}
