import { Curry } from '../src/main'

function sum (a: number, b: number, c: number, d: number): number {
  return a + b + c + d
}

test('Curry function', () => {
  expect(Curry(sum, 1, 2)(3, 4)).toBe(10)
})
