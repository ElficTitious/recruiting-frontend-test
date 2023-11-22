import React from 'react';
import TableRow from './InvoiceTableRow';

function SimpleTable({
  header,
  tableData,
  selectedRows,
  setSelectedRows,
  usdToClpExchange,
  multiple = false,
}) {
  function handleRadioClick(id) {
    if (multiple) {
      if (selectedRows.includes(id)) {
        setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
      } else {
        setSelectedRows([...selectedRows, id]);
      }
    } else {
      if (selectedRows === id) {
        setSelectedRows(null);
      } else {
        setSelectedRows(id);
      }
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-medium">{header}</h2>
      <div className="w-3/5">
        {tableData.length === 0 ? (
          <div className="p-4 flex justify-center border rounded-lg">
            <div>No hay datos</div>
          </div>
        ) : (
          tableData.map((row, index) => (
            <TableRow
              key={row.id}
              row={row}
              selected={
                multiple
                  ? selectedRows.includes(row.id)
                  : selectedRows === row.id
              }
              onRowClick={() => handleRadioClick(row.id)}
              usdToClpExchange={usdToClpExchange}
              radioButtonName={multiple ? row.id : 'radioButton'}
              isUpperRow={index === 0}
              isLowerRow={index === tableData.length - 1}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default SimpleTable;
