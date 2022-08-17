/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import '../Components/Cronometro.css';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';

function Cronometro() {
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="timer">
      <div className="container">
        <div className="timer_container">
          <h1>Cronometro</h1>
          <h1>10:30</h1>
        </div>
      </div>
    </div>
  );
}

export default Cronometro;
