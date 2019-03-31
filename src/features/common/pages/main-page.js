import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@ui/atoms'
import { CommonTemplate } from '../temlpates'
import { SearchableBox } from '../organisms'
import { connect } from 'react-redux'
import { Preloader } from '@ui/molecules'

const MainPageView = ({ isLoaded }) => {
  return (
    <CommonTemplate fullHeight>
      {!isLoaded ? (
        <Preloader />
      ) : (
        <Container>
          <SearchableBox />
        </Container>
      )}
    </CommonTemplate>
  )
}

MainPageView.defaultProps = {
  isLoaded: true
}

MainPageView.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoaded: state.weather.isLoaded
  }
}

export const MainPage = connect(mapStateToProps)(MainPageView)
