import { getDataGastos, getDataIngresos, verifyDoc, guardarDBGasto, guardarDBIngreso } from '../Services/Finanzas';

const user = {
  uid: 'HQJuMK9irvNDhbM4GKdSL0IcNw72',
};

const userMalo2 = {
  uid: 'HQJuMK9irvNDhbM4GKdSL0IcNw',
};

const today = new Date();
const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
const ingreso = { date, ingreso: 25.5 };
const gasto = { date, gasto: 20.5 };

test('verifica el doc existente: ', async () => {
  verifyDoc(user);
  const ingresos = await getDataIngresos(user);
  expect(ingresos.length).toBe(6);
});

test('regresa el numero de ingresos existentes: ', async () => {
  const ingresos = await getDataIngresos(user);
  expect(ingresos.length).toBe(6);
});

test('regresa el undefined con un mal user: ', async () => {
  const ingresos = await getDataIngresos(userMalo2);
  expect(ingresos.length).toBe(undefined);
});

test('regresa el numero de gastos existentes: ', async () => {
  const gastos = await getDataGastos(user);
  expect(gastos.length).toBe(6);
});

test('regresa el undefined con un mal user: ', async () => {
  const gastos = await getDataGastos(userMalo2);
  expect(gastos.length).toBe(undefined);
});

test('guardar un ingreso nuevo: ', async () => {
  guardarDBIngreso(user, ingreso);
  const ingresos = await getDataIngresos(user);
  expect(ingresos.length).toBe(6);
});

test('guardar un gasto nuevo: ', async () => {
  guardarDBGasto(user, gasto);
  const gastos = await getDataGastos(user);
  expect(gastos.length).toBe(6);
});
