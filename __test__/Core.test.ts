import { doesNotMatch } from 'assert'
import { apply, call, instanceOf, debounce } from '../src/lib/Core'

test('apply function', () => {
  function name (this: any) {
    return this.name
  }
  const obj = { name: 'dzh' }
  expect(apply(obj, name)).toBe('dzh')
})

test('call function', () => {
  function name (this: any) {
    return this.name
  }
  const obj = { name: 'dzh' }
  expect(call(obj, name)).toBe('dzh')
})

test('instanceof operator', () => {
  const arr: any[] = []
  expect(instanceOf(arr, Object)).toBe(true)
  expect(instanceOf(arr, RegExp)).toBe(false)
})

jest.setTimeout(30000)
test('debounce func', (done) => {
  let a = 1
  const fn = debounce(() => {
    a++
  }, 3000)
  let num = 1
  const interval = setInterval(() => {
    num++
    if (num === 6) clearInterval(interval)
    fn()
  }, 500)
  setTimeout(() => {
    expect(a).toBe(2)
    done()
  }, 5000)
})
