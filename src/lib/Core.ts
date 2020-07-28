/* eslint-disable no-proto */
export function CreateObj (prototype: object): object {
  const F = class { }
  F.prototype = prototype
  return new F()
}

export function NewObj (fn: Function, ...args: any[]): object {
  const obj = Object.create(fn.prototype)
  const res = fn.call(obj, ...args)
  return res !== null && typeof res === 'object' ? res : obj
}

export function instanceOf (obj: any | any[], fn: Function): Boolean {
  let __proto__ = obj.__proto__
  const prototype = fn.prototype
  while (__proto__) {
    if (__proto__ === prototype) return true
    else __proto__ = __proto__.__proto__
  }
  return false
}

export function apply (context: any, fn: Function) {
  const symbolFn: symbol = Symbol('func')
  const _args: any[] = Array.prototype.slice.call(arguments, 2)
  context[symbolFn] = fn
  const res = context[symbolFn](...[..._args])
  delete context[symbolFn]
  return res
}

export function call (context: any, fn: Function) {
  const symbolFn: symbol = Symbol('func')
  const _args: any[] = Array.prototype.slice.call(arguments, 2)
  context[symbolFn] = fn
  const res = context[symbolFn](..._args)
  delete context[symbolFn]
  return res
}

export function debounce (this: any, fn: Function, time: number) {
  let clock: any = null
  return () => {
    if (clock) {
      clearTimeout(clock)
    }
    clock = setTimeout(() => {
      fn.apply(this)
      clearTimeout(clock)
    }, time)
  }
}
