import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { PagButton, PaginationWrapper } from '@ui/atoms'
import { computePages } from '../actions'
import { paginationSelector } from '../selectors'

export const PaginationView = ({
  dispatch,
  pagination: { pages = [], currentPage, totalPages }
}) => {
  return (
    <PaginationWrapper>
      <PagButton
        disabled={currentPage === 1}
        onClick={() => dispatch(computePages(1))}
      >
        1
      </PagButton>
      <PagButton
        disabled={currentPage === 1}
        onClick={() => dispatch(computePages(currentPage - 1))}
      >
        {'<'}
      </PagButton>
      {pages.map(pageNumber => (
        <PagButton
          key={pageNumber}
          active={currentPage === pageNumber}
          onClick={() => dispatch(computePages(pageNumber))}
        >
          {pageNumber}
        </PagButton>
      ))}
      <PagButton
        disabled={currentPage === totalPages}
        onClick={() => dispatch(computePages(currentPage + 1))}
      >
        {'>'}
      </PagButton>
      <PagButton
        disabled={currentPage === totalPages}
        onClick={() => dispatch(computePages(totalPages))}
      >
        {totalPages}
      </PagButton>
    </PaginationWrapper>
  )
}

PaginationView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    pages: PropTypes.arrayOf(PropTypes.number),
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired
  })
}

const mapStateToProps = (state, ownProps) => ({
  pagination: paginationSelector(state)
})

export const Pagination = connect(mapStateToProps)(PaginationView)
