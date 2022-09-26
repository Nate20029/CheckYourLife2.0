import { useState, createContext } from 'react';

/* export function startTimer() {
  setStartAnimate(true);
}

export function pauseTimer() {
  setStartAnimate(false);
}

export const setTimerTime = (evaluate) => {
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
*/
export const children = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return `${minutes}:${seconds}`;
};
