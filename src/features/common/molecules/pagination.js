import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { PagButton, PaginationWrapper } from '@ui/atoms'
import { computePages } from '../actions'

export const PaginationView = ({
  dispatch,
  pages,
  currentPage,
  totalPages
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

PaginationView.defaultProps = {
  pages: []
}

PaginationView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
}

export const Pagination = connect()(PaginationView)
