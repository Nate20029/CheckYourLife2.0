import { getDataMessenger } from '../Services/Chat';

const ids = 'YbS6L6GN99Xob0hdKe6bnrkfwA634FPh3nzdnEfCQagSYL3KKZfu3uq1';
const idcorr = 'YbS6L6GN99Xob0hdKe6bnrkfwA634FPh3nzdnEfCQagSYL3KKZfu3uq1';

test('regresa el numero de mensajes existentes: ', async () => {
  const comunidad = await getDataMessenger();
  expect(comunidad.lenght).toContain(3);
});
