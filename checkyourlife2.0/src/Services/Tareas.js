/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export const getCurrentDates = () => {
  const dates = [];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const daysInCurrentMonth = new Date(currentDate.getFullYear(), currentMonth, 0).getDate();

  for (let i = 1; i < daysInCurrentMonth; i++) {
    dates.push(new Date(currentDate.getFullYear(), currentMonth, i));
  }
  return dates;
};

export const convertDate = (dayOfWeek, dayOfMonth) => `${days[dayOfWeek]} ${dayOfMonth}`;

export const dayToDate = (day) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  return new Date(currentDate.getFullYear(), currentMonth, day);
};