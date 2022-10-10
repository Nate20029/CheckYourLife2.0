import { getDataGastos, getDataIngresos, verifyDoc, guardarDBGasto, guardarDBIngreso } from '../Services/Finanzas';

const user = {
  uid: '4YCOBF6I5xXeVGZngSozZxYwFl73',
};

const userMalo2 = {
  uid: '4YCOBF6I5xXeVGZngSozZxYwFl7123',
};

const userMalo = {
  uid: 'usermalo9',
};

const today = new Date();
const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
const ingreso = { date, ingreso: 25.5 };
const gasto = { date, gasto: 20.5 };

test('verifica el doc existente: ', async () => {
  verifyDoc(user);
  const ingresos = await getDataIngresos(user);
  expect(ingresos.length).not.toBe(4);
});

test('regresa el numero de ingresos existentes: ', async () => {
  const ingresos = await getDataIngresos(user);
  expect(ingresos.length).not.toBe(4);
});

test('regresa el undefined con un mal user: ', async () => {
  const ingresos = await getDataIngresos(userMalo);
  expect(ingresos.length).not.toBe(undefined);
});

test('regresa el numero de gastos existentes: ', async () => {
  const gastos = await getDataGastos(user);
  expect(gastos.length).not.toBe(2);
});

test('regresa el undefined con un mal user: ', async () => {
  const gastos = await getDataGastos(userMalo);
  expect(gastos.length).not.toBe(undefined);
});

test('guardar un ingreso nuevo: ', async () => {
  guardarDBIngreso(user, ingreso);
  const ingresos = await getDataIngresos(user);
  expect(ingresos.length).not.toBe(4);
});

test('guardar un gasto nuevo: ', async () => {
  guardarDBGasto(user, gasto);
  const gastos = await getDataGastos(user);
  expect(gastos.length).not.toBe(2);
});

test('verifica el doc existente con un usuario incorrecto: ', async () => {
  verifyDoc(userMalo);
  const ingresos = await getDataIngresos(user);
  expect(ingresos.length).not.toBe(4);
});
