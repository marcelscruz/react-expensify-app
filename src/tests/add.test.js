const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should print a greeting with a name', () => {
  const result = generateGreeting('Marcel');
  expect(result).toBe('Hello Marcel!');
});

test('should print a greeting with no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});
