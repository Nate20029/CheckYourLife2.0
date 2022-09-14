import { sum, getData } from '../Services/Tareas';

const user = {
  uid: 'MK2akObDBlRtE1n0AqH5Y1U2tOQ2',
};

test('adds 1 + 2 to equal 3', async () => {
  const response = await getData(user);
  expect(response.length).toBe(2);
});
