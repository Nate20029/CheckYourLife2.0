import React from 'react';
import { getDataMessenger } from '../Services/Chat';

const ids = 'YbS6L6GN99Xob0hdKe6bnrkfwA634FPh3nzdnEfCQagSYL3KKZfu3uq1';
const idcorr = 'YbS6L6GN99Xob0hdKe6bnrkfwA634FPh3nzdnEfCQagSYL3KKZfu3uq1';

test('regresa el numero de mensajes existentes: ', async () => {
  const comunidad = await getDataMessenger();
  expect(comunidad.length).toBe(2);
});

/* test('regresa undefined por un mal valor: ', async () => {
  const comunidad = getDataMessenger();
  expect(comunidad.length).toBe(undefined);
}); */

/* test('no funciona si está mal el id del mensaje: ', async () => {
  const comunidad = getDataMessenger(ids);
  expect(comunidad.length).toBe(undefined);
});
 */
