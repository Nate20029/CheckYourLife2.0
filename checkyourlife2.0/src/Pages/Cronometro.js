/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Button, ButtonGroup, Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import '../Components/Cronometro.css';
import SplitPane from 'react-split-pane';
import '../Components/Split.css';
import Temporizador from './Temporizador';
import '../Components/Temporizador.css';

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
      <SplitPane
        split="vertical"
        allowResize={false}
      >
        <Temporizador />
        <div id="clock-holder">
          <div>
            <h1 className="cronometro">Cronometro</h1>
          </div>
          <div>
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
      </SplitPane>
    </div>
  );
}

export default Cronometro;
