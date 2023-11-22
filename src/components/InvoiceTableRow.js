import React from 'react';
import classNames from 'classnames';

function TableRow({
  row,
  selected,
  onRowClick,
  isUpperRow = false,
  isLowerRow = false,
}) {
  return (
    //
    <div
      className={classNames('p-4 flex justify-between border', {
        'bg-violet-100 border-indigo-400': selected,
        'rounded-t-lg': isUpperRow,
        'rounded-b-lg': isLowerRow,
      })}
    >
      <div>
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            name="radioButton"
            className="text-indigo-600 focus:ring-indigo-600"
            value={row.id}
            checked={selected}
            onChange={onRowClick}
          />
          <div className={classNames('', { 'text-indigo-600': selected })}>
            {row.field1}
          </div>
        </div>
      </div>
      <div className={classNames({ 'text-indigo-600': selected })}>
        {row.field2}
      </div>
      <div className={classNames({ 'text-indigo-600': selected })}>
        {row.field3}
      </div>
    </div>
  );
}

export default TableRow;
