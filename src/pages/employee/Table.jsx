import React from 'react';
import { useTable, useSortBy } from 'react-table';

function Table({ data, columns }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy // Enable sorting functionality
  );

  return (
    <table {...getTableProps()} className="employee-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())} // Enable sorting for the column
                className="table-header"
              > {column.render('Header')}
                {column.Header !== 'action' && (
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? '\u2193' // Down arrow
                        : '\u2191' // Up arrow
                      : ''}
                  </span>
                )}
                
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="table-row">
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className="table-cell">
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
