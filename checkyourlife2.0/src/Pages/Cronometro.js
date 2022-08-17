/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import '../Components/Cronometro.css';
import DisplayComponent from '../Components/DisplayComponent';
import BtnComponent from '../Components/BtnComponent';

function Cronometro() {
  const navigate = useNavigate();

  const [time, setTime] = useState({
    ms: 0, s: 0, m: 0, h: 0,
  });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  let updatedMs = time.ms;
  let updatedS = time.s;
  let updatedM = time.m;
  let updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH += 1;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM += 1;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS += 1;
      updatedMs = 0;
    }
    updatedMs += 1;
    return setTime({
      ms: updatedMs, s: updatedS, m: updatedM, h: updatedH,
    });
  };

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({
      ms: 0, s: 0, m: 0, h: 0,
    });
  };

  const resume = () => start();

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start} />
        </div>
      </div>
    </div>
  );
}

export default Cronometro;
