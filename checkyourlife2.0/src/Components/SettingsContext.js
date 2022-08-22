/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext } from 'react';

export const SettingsContext = createContext();

function SettingsContextProvider(props) {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  // start animation fn
  function startTimer() {
    setStartAnimate(true);
  }
  // pause animation fn
  function pauseTimer() {
    setStartAnimate(false);
  }
  // pass time to counter
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  // clear session storage
  const SettingsBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case 'work':
        setPomodoro(evaluate.work);
        break;
      case 'short':
        setPomodoro(evaluate.short);
        break;
      case 'long':
        setPomodoro(evaluate.long);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  function setCurrentTimer(activeState) {
    updateExecute({
      ...executing,
      active: activeState,
    });
    setTimerTime(executing);
  }

  function stopAimate() {
    setStartAnimate(false);
  }

  return (
    <SettingsContext.Provider value={{
      pomodoro,
      executing,
      updateExecute,
      startAnimate,
      startTimer,
      pauseTimer,
      children,
      SettingsBtn,
      setCurrentTimer,
      stopAimate,
    }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;
