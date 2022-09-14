import { getDataGastos, getDataIngresos } from '../Services/Finanzas';

const user = {
  uid: 'HQJuMK9irvNDhbM4GKdSL0IcNw72',
};

test('regresa el numero de ingresos existentes: ', async () => {
  const ingresos = getDataIngresos(user);
  expect(ingresos.length).toBe(2);
});

test('regresa el numero de gastos existentes: ', async () => {
  const gastos = await getDataGastos(user);
  expect(gastos.length).toBe(2);
});
