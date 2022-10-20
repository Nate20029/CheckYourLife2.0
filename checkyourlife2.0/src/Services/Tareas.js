import {
  doc, getDoc, updateDoc, arrayUnion, arrayRemove,
} from 'firebase/firestore';

import { db } from './firebase';
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

export const getData = async (u) => {
  const docRef = doc(db, 'users', u.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().tasks;
  }
  return [];
};

export const addTask = async (user, name, description, beginDate, endDate) => {
  const docRef = doc(db, 'users', user.uid);
  if (name.length > 2) {
    /* istanbul ignore next */
    exp = (beginDate && endDate) ? [new Date(beginDate), new Date(endDate)] : [];
    /* istanbul ignore next */
    await updateDoc(docRef, {
      tasks: arrayUnion({
        completed: false,
        description,
        expiration: exp,
        important: true,
        title: name,
      }),
    });
  }
  return getData(user);
};

export const handleData = async (user, data, newTask) => {
  if (user) {
    const docRef = doc(db, 'users', user.uid);
    // eslint-disable-next-line array-callback-return
    data.map((task) => {
      if (task.title === newTask.title) {
        updateDoc(docRef, {
          tasks: arrayRemove(task),
        });
        updateDoc(docRef, {
          tasks: arrayUnion(newTask),
        });
      }
    });
    return getData(user);
  }
  return [];
};
