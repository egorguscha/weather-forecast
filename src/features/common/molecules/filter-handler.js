import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FilterButton } from '@ui/molecules'
import { FilterRadioButton, FilterRadioLabel } from '@ui/atoms'
import { filterWeatherParams } from '../actions'
import { filterSelector } from '../selectors'

const FilterHandlerView = ({ text, onChange, filterType, filterName }) => {
  const active = filterType === filterName
  return (
    <FilterButton>
      <FilterRadioLabel active={active} htmlFor={text} filterName={filterName}>
        {text}
      </FilterRadioLabel>
      <FilterRadioButton
        onChange={onChange}
        type="radio"
        name="filter"
        id={text}
      />
    </FilterButton>
  )
}

FilterHandlerView.defaultProps = {
  active: false
}
FilterHandlerView.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  filterType: filterSelector(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(filterWeatherParams(ownProps.filterName))
})

export const FilterHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterHandlerView)
