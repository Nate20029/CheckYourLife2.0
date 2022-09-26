import React, { useContext, useState } from 'react';
import { SettingsContext } from '../Components/SettingsContext';

const contenedor = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.2,
    short: 0.1,
    long: 0.5,
    active: 'work',
  });

  const { updateExecute } = useContext(SettingsContext);
};
export const handleChange = (input) => {
  const { name, value } = input.target;
  switch (name) {
    case 'work':
      setNewTimer({
        ...newTimer,
        work: parseInt(value, 10),
      });
      break;
    case 'shortBreak':
      setNewTimer({
        ...newTimer,
        short: parseInt(value, 10),
      });
      break;
    case 'longBreak':
      setNewTimer({
        ...newTimer,
        long: parseInt(value, 10),
      });
      break;
    default:
        // do nothing
  }
};

export const handleSubmit = (e) => {
  e.preventDefault();
  updateExecute(newTimer);
};
