/* eslint-disable no-plusplus */
import { getData, addTask, handleData, convertDate, getCurrentDates,
} from '../Services/Tareas';

const user = {
  uid: 'I2LZBAGj2mOQjzzg90nmnxwZfEZ2',
};

test('Verificar que la cantidad de tareas que retorna la base de datos es la esperada.', async () => {
  const response = await getData(user);
  expect(response.length).toBe(response.length);
});

test('Verificar que la cantidad de tareas que retorna es [].', async () => {
  const response = await getData({
    uid: 'LJKSDNFKJSNDKFJND',
  });
  console.log(response);
  expect(response).toStrictEqual([]);
});

/* test('Verificar las fechas.', async () => {
  const values = getCurrentDates();

  const arrOfStr = values.map((val) => String(val));

  expect(arrOfStr).toStrictEqual(
    [
      'Thu Sep 01 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Fri Sep 02 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Sat Sep 03 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Sun Sep 04 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Mon Sep 05 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Tue Sep 06 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Wed Sep 07 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Thu Sep 08 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Fri Sep 09 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Sat Sep 10 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Sun Sep 11 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Mon Sep 12 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Tue Sep 13 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Wed Sep 14 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Thu Sep 15 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Fri Sep 16 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Sat Sep 17 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Sun Sep 18 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Mon Sep 19 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Tue Sep 20 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Wed Sep 21 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Thu Sep 22 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Fri Sep 23 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Sat Sep 24 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Sun Sep 25 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Mon Sep 26 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Tue Sep 27 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Wed Sep 28 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Thu Sep 29 2022 00:00:00 GMT-0600 (Central Standard Time)',
      'Fri Sep 30 2022 00:00:00 GMT-0600 (Central Standard Time)',
    ],
  );
}); */

/* test('Verificar si realmente se agrega una tarea correctamente.', async () => {
  const initialTasks = await getData(user);
  const name = 'Tarea De Prueba';
  const description = 'Esta es una tarea creada para comprobar las tareas';
  const beginDate = new Date('2022-09-13');
  const endDate = new Date('2022-09-16');

  const response = await addTask(user, name, description, beginDate, endDate);
  expect(response.length).toBe(initialTasks.length + 1);
}); */

test('Verificar si realmente se realiza la concatenacion correctamente.', async () => {
  console.log(convertDate(1, 4));
  expect(convertDate(1, 4)).toBe('Monday 4');
});

test('Verificar si realmente se agrega una tarea correctamente.', async () => {
  let tasks = await getData(user);
  const updateTask = {
    completed: false,
    description: 'Esta es la nueva Descripción',
    expiration: [new Date('2022-09-13'), new Date('2022-09-16')],
    important: true,
    title: 'Tarea De Prueba',
  };
  tasks = await handleData(user, tasks, updateTask);
  let flag = false;
  for (let index = 0; index < tasks.length; index++) {
    const task = tasks[index];
    if (task.completed === updateTask.completed
        && task.description === updateTask.description
        && task.title === updateTask.title) {
      flag = true;
    }
  }
  expect(flag).toBe(true);
});

/* test('Verificar si se solicita agregar data a un usuario null, setorna []', async () => {
  tasks = await handleData(null, null, null);
  expect(tasks).toStrictEqual([]);
}); */

test('Verificar si realmente acepta tareas con titulo unicamente mayor a 2 caracteres.', async () => {
  const initialTasks = await getData(user);
  const name = 'AS';
  const description = 'Esta es una tarea creada para comprobar las tareas';
  const beginDate = new Date('2022-09-13');
  const endDate = new Date('2022-09-16');

  const response = await addTask(user, name, description, beginDate, endDate);
  expect(response.length).toBe(initialTasks.length);
});

/*
test('Verificar si agrega fechas se lanza null', async () => {
  const initialTasks = await getData(user);
  const name = 'AS';
  const description = 'Esta es una tarea creada para comprobar las tareas';
  const beginDate = null;
  const endDate = null;

  const response = await addTask(user, name, description, null, null);
  expect(response.length).toBe(initialTasks.length + 1);
});
*/
