import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ButtonPrimary, InputSearch, Label } from '../atoms'

const SearchWrapper = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr
  grid-template-areas:
    'label .'
    'error-box .'
    'input button';
`

const ErrorBox = styled.div`
  grid-area: error-box;
  margin: 0 0 0.4rem 0;
  font-size: 0.8rem;
  color: red;
`

export const Search = ({ value, onSubmit, onChange, error }) => (
  <SearchWrapper onSubmit={onSubmit}>
    <Label>Town</Label>
    {error && <ErrorBox>{error}</ErrorBox>}
    <InputSearch value={value} onChange={onChange} />
    <ButtonPrimary
      hover={'#ff9f1c'}
      initial={'#ffc16e'}
      active={'#e8911a'}
      color={'#fff'}
      borderRadius={[0, 10, 10, 0]}
    >
      Search
    </ButtonPrimary>
  </SearchWrapper>
)

Search.propTypes = {
  value: PropTypes.string
}
