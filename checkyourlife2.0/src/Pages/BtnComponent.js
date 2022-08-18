import React from 'react';

function BtnComponent({
  status, start, stop, reset, resume,
}) {
  return (
    <div>
      {(status === 0)
        ? (
          <button
            type="button"
            className="stopwatch-btn stopwatch-btn-gre"
            onClick={start}
          >
            Start
          </button>
        )
        : ''}

      {(status === 1) ? (
        <div>
          <button
            type="button"
            className="stopwatch-btn stopwatch-btn-red"
            onClick={stop}
          >
            Stop
          </button>
          <button
            type="button"
            className="stopwatch-btn stopwatch-btn-yel"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      ) : ''}

      {(status === 2)
        ? (
          <div>
            <button
              type="button"
              className="stopwatch-btn stopwatch-btn-gre"
              onClick={resume}
            >
              Resume
            </button>
            <button
              type="button"
              className="stopwatch-btn stopwatch-btn-yel"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        ) : ''}

    </div>
  );
}

export default BtnComponent;
