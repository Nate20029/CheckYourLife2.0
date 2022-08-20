/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import Boton from '../Components/Button';
import CountdownAnimation from '../Components/CountdownAnimation';
import SetPomodoro from '../Components/SetPomodoro';
import { SettingsContext } from '../Components/SettingsContext';
import '../Components/Temporizador.css';

function Temporizador() {
  const navigate = useNavigate();
  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(SettingsContext);

  useEffect(() => { updateExecute(executing); }, [executing, startAnimate]);

  return (
    <div className="container">
      <h1>Temporizador</h1>
      {pomodoro !== 0
        ? (
          <>
            <ul className="labels">
              <li>
                <Boton
                  title="Trabajo"
                  activeClass={executing.active === 'work' ? 'active-label' : undefined}
                  _callback={() => setCurrentTimer('work')}
                />
              </li>
              <li>
                <Boton
                  title="Descansito"
                  activeClass={executing.active === 'short' ? 'active-label' : undefined}
                  _callback={() => setCurrentTimer('short')}
                />
              </li>
              <li>
                <Boton
                  title="Descanso"
                  activeClass={executing.active === 'long' ? 'active-label' : undefined}
                  _callback={() => setCurrentTimer('long')}
                />
              </li>
            </ul>
            <Boton title="Settings" _callback={SettingsBtn} />
            <div className="timer-container">
              <div className="time-wrapper">
                <CountdownAnimation
                  key={pomodoro}
                  timer={pomodoro}
                  animate={startAnimate}
                >
                  {children}
                </CountdownAnimation>
              </div>
            </div>
            <div className="button-wrapper">
              <Boton title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
              <Boton title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
            </div>
          </>
        ) : <SetPomodoro />}
    </div>
  );
}

export default Temporizador;
