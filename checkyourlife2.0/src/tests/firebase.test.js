import { useAuth } from '../src/firebase';

const user = {
  uid: 'HQJuMK9irvNDhbM4GKdSL0IcNw72',
};

test('revisa el usuario regresado: ', async () => {
  user2 = useAuth();
  expect(user2).toBe(user);
});
