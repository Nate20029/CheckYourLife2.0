/* eslint-disable no-plusplus */
import { getData, addTask, handleData } from '../Services/Tareas';

const user = {
  uid: 'MK2akObDBlRtE1n0AqH5Y1U2tOQ2',
};

test('Verificar que la cantidad de tareas que retorna la base de datos es la esperada.', async () => {
  const response = await getData(user);
  expect(response.length).toBe(3);
});

test('Verificar si realmente se agrega una tarea correctamente.', async () => {
  const initialTasks = await getData(user);
  const name = 'Tarea De Prueba';
  const description = 'Esta es una tarea creada para comprobar las tareas';
  const beginDate = new Date('2022-09-13');
  const endDate = new Date('2022-09-16');

  const response = await addTask(user, name, description, beginDate, endDate);
  expect(response.length).toBe(initialTasks.length + 1);
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
