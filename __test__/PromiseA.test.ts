import { PromiseA } from '../src/main'

test('MyPromise', (done) => {
  new PromiseA((resolve: Function, reject: Function) => {
    setTimeout(() => {
      reject(5)
    }, 0)
  }).catch((err: any) => {
    return err
  }).catch((err: any) => {
    return new PromiseA((resolve: Function, reject: Function) => {
      resolve(err + 10)
    })
  }).then((res: any) => {
    expect(res).toBe(15)
    done()
  })
})
