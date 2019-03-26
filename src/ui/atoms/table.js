import styled from 'styled-components'

const TableCell = styled.td`
  padding: 1rem 2rem;
`
export const TableBodyCell = styled(TableCell)``
export const TableHeadCell = styled(TableBodyCell)``
export const TableHead = styled.thead`
  color: #fff;
  background: #011627;
`
export const TableBody = styled.tbody``
export const CustomTable = styled.table`
  border: 1px solid;
  border-color: rgba(1, 22, 39, 0.52);
  border-spacing: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
`
export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #fff;
  }
`
