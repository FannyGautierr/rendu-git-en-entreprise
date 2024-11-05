import { expect, test } from 'vitest';
import { calculate } from './../src/calculator';

test('adds 1 + 2 to equal 3', () => {
  expect(calculate(1, 2, '+')).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
  expect(calculate(2, 1, '-')).toBe(1);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(calculate(2, 3, '*')).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
  expect(calculate(6, 2, '/')).toBe(3);
});

test('returns undefined for invalid operator', () => {
  expect(calculate(1, 2, 'invalid')).toBeUndefined();
});
