import { children } from '../Services/Reloj';

/* const encendido = false;
const apagado = true;
const evaluar = '';

test('encendido: ', () => {
  const cambio = startTimer(encendido);
  expect(cambio.change).toBe(true);
});

test('apagado: ', () => {
  const cambio = pauseTimer(apagado);
  expect(cambio.change).toBe(false);
});

test('verificar el timer: ', () => {
  const cambio = setTimerTime(evaluate);
  expect(cambio.change).toBe('work' || 'short' || 'long');
});
*/

const tiempo = 1;

test('prueba: ', () => {
  const cambio = children(tiempo);
  expect(cambio.length).toBe(7);
});
