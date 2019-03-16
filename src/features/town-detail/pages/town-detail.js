import React from 'react'
import PropTypes from 'prop-types'
import { CommonTemplate } from '../templates'
import { Grid } from '@ui/grid'
import { TownHead } from '@ui'
export const TownDetail = () => (
  <CommonTemplate>
    <Grid.Wrapper>
      <Grid.Column>
        <TownHead />
      </Grid.Column>
      <Grid.Column>2</Grid.Column>
      <Grid.Column>3</Grid.Column>
    </Grid.Wrapper>
  </CommonTemplate>
)

TownDetail.defaultProps = {}

TownDetail.propTypes = {}
