import { handleChange, handleSubmit } from '../Services/Reloj';

const input = { work: 0.2 };
const timer = ({
  work: 0.2,
  short: 0.1,
  long: 0.5,
  active: 'work',
});

test('regresa la etiqueta y el valor del timer: ', () => {
  const cambio = handleChange(input);
  expect(cambio.lenght).toBe(3);
});

test('verifica si hay un nuevo timer: ', () => {
  const change = handleSubmit(timer);
  expect(change.lenght).toBe(4);
});
