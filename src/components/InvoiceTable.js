import React from 'react';
import TableRow from './InvoiceTableRow';

function SimpleTable({ header, tableData, onRowClick, multiple = false }) {
  const [selectedRows, setSelectedRows] = React.useState(multiple ? [] : null);

  function handleRadioClick(id) {
    onRowClick(id);
    if (multiple) {
      if (selectedRows.includes(id)) {
        setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
      } else {
        setSelectedRows([...selectedRows, id]);
      }
    } else {
      setSelectedRows(id);
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-medium">{header}</h2>
      <div className="w-3/5">
        {tableData.map((row, index) => (
          <TableRow
            key={row.id}
            row={row}
            selected={
              multiple ? selectedRows.includes(row.id) : selectedRows === row.id
            }
            onRowClick={() => handleRadioClick(row.id)}
            isUpperRow={index === 0}
            isLowerRow={index === tableData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default SimpleTable;