import React from 'react'
import PropTypes from 'prop-types'
import { Container, Search } from '@ui'
import { CommonTemplate } from '../temlpates'
import { SearchableBox } from '../organisms'

export const MainPage = () => (
  <CommonTemplate fullHeight>
    <Container>
      <SearchableBox />
    </Container>
  </CommonTemplate>
)

MainPage.defaultProps = {}

MainPage.propTypes = {}
