// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { SettingsContext } from './SettingsContext';

function SetPomodoro() {
  const [newTimer, setNewTimer] = useState({
    work: 0.2,
    short: 0.1,
    long: 0.5,
    active: 'work',
  });

  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (input) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input className="input" type="number" name="work" onChange={handleChange} value={newTimer.work} />
          <input className="input" type="number" name="shortBreak" onChange={handleChange} value={newTimer.short} />
          <input className="input" type="number" name="longBreak" onChange={handleChange} value={newTimer.long} />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  );
}

export default SetPomodoro;
