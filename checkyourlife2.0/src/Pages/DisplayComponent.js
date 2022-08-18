import React from 'react';

function DisplayComponent({
  h, m, s, ms,
}) {
  const a = () => {
    if (h === 0) {
      return '';
    }
    return <span>{(h >= 10) ? h : `0${h}`}</span>;
  };
  return (
    <div>
      {a()}
&nbsp;&nbsp;
      <span>{(m >= 10) ? m : `0${m}`}</span>
&nbsp;:&nbsp;
      <span>{(s >= 10) ? s : `0${s}`}</span>
&nbsp;:&nbsp;
      <span>{(ms >= 10) ? ms : `0${ms}`}</span>
    </div>
  );
}

export default DisplayComponent;
