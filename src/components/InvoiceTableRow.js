import React from 'react';
import classNames from 'classnames';

function TableRow({
  row,
  selected,
  onRowClick,
  usdToClpExchange,
  radioButtonName,
  isUpperRow = false,
  isLowerRow = false,
}) {
  const clpAmount =
    row.currency === 'USD' ? row.amount * usdToClpExchange : row.amount;
  const usdAmount =
    row.currency === 'CLP'
      ? (row.amount / usdToClpExchange).toFixed(1)
      : row.amount;

  return (
    <div
      className={classNames('p-4 flex justify-between border', {
        'bg-violet-100 border-indigo-400': selected,
        'rounded-t-lg': isUpperRow,
        'rounded-b-lg': isLowerRow,
      })}
    >
      <div className="flex-1 text-left">
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            name={radioButtonName}
            className="text-indigo-600 focus:ring-indigo-600"
            value={row.id}
            readOnly
            checked={selected}
            onClick={onRowClick}
          />
          <div className={classNames('', { 'text-indigo-600': selected })}>
            {`${row.id} (${row.organization_id})`}
          </div>
        </div>
      </div>
      <div
        className={classNames('flex-1 text-center', {
          'text-indigo-600': selected,
        })}
      >{`$${clpAmount} CLP ($${usdAmount} USD)`}</div>
      <div
        className={classNames('flex-1 text-right', {
          'text-indigo-600': selected,
        })}
      >
        {row.type === 'received' ? 'Recibida' : row.reference}
      </div>
    </div>
  );
}

export default TableRow;
