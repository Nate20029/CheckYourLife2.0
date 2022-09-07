const HandleChangeG = require('../Components/Finanzas/HandleChangeG');

test('returns assigned value to sum G', () => {
  expect(HandleChangeG(5)).toBe(5);
});
