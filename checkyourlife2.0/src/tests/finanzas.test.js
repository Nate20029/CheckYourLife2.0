import { getDataGastos, getDataIngresos, verifyDoc } from '../Services/Finanzas';

const user = {
  uid: 'HQJuMK9irvNDhbM4GKdSL0IcNw72',
};

const userMalo2 = {
  uid: 'HQJuMK9irvNDhbM4GKdSL0IcNw',
};

test('verifica el doc existente: ', async () => {
  verifyDoc(user);
  const ingresos = await getDataIngresos(user);
  expect(ingresos.length).toBe(2);
});

test('regresa el numero de ingresos existentes: ', async () => {
  const ingresos = await getDataIngresos(user);
  expect(ingresos.length).toBe(2);
});

test('regresa el undefined con un mal user: ', async () => {
  const ingresos = await getDataIngresos(userMalo2);
  expect(ingresos.length).toBe(undefined);
});

test('regresa el numero de gastos existentes: ', async () => {
  const gastos = await getDataGastos(user);
  expect(gastos.length).toBe(1);
});

test('regresa el undefined con un mal user: ', async () => {
  const gastos = await getDataGastos(userMalo2);
  expect(gastos.length).toBe(undefined);
});
