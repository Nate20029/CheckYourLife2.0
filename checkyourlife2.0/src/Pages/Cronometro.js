/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import '../Components/Cronometro.css';

function Cronometro() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="main-section">
      <h2>Cronometro</h2>
      <div id="clock-holder">
        <div className="stopwatch">
          <span>
            {(`0${Math.floor((time / 60000) % 60)}`).slice(-2)}
          </span>
          <span>
            {(`0${Math.floor((time / 1000) % 60)}`).slice(-2)}
          </span>
          <span>{(`0${(time / 10) % 100}`).slice(-2)}</span>

          <div>
            {!timerOn && time === 0 && (
              <button type="button" className="stopwatch-btn stopwatch-btn-gre" onClick={() => setTimerOn(true)}>Start</button>
            )}
            {timerOn && <button className="stopwatch-btn stopwatch-btn-red" type="button" onClick={() => setTimerOn(false)}>Stop</button>}
            {!timerOn && time > 0 && (
              <button type="submit" className="stopwatch-btn stopwatch-btn-yel" onClick={() => setTime(0)}>Reset</button>
            )}
            {!timerOn && time > 0 && (
              <button type="button" className="stopwatch-btn stopwatch-btn-gre" onClick={() => setTimerOn(true)}>Resume</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cronometro;
