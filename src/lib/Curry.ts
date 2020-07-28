export function Curry (this: any, fn: Function, ...args: any[]) {
  if (args.length < fn.length) {
    return (...newArgs: any[]) => {
      return Curry(fn, ...args, ...newArgs)
    }
  } else {
    return fn.apply(this, args)
  }
}
