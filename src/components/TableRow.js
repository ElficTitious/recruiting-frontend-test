import React from 'react';

function TableRow({ row, selected, onRowClick }) {
  return (
    <tr
      className={classNames('p-4', {
        'bg-purple-200': selected,
      })}
      onClick={onRowClick}
    >
      <td>
        <input
          type="radio"
          name="radioButton"
          value={row.id}
          checked={selected}
          readOnly
        />
      </td>
      <td>{row.field1}</td>
      <td>{row.field2}</td>
    </tr>
  );
}

export default TableRow;
