/* eslint-disable no-unused-vars */
import React from 'react';

function DateItem({
  data, selected, onClickFunction, date,
}) {
  const dataSplit = data.split(' ');

  return (
    <div
      className={`date_item_container${selected ? ' selected_date' : ''}`}
      onClick={() => { onClickFunction(date); }}
      aria-hidden="true"
    >
      {dataSplit[0]}
      {' '}
      <br />
      {' '}
      {dataSplit[1]}
    </div>
  );
}

export default DateItem;
