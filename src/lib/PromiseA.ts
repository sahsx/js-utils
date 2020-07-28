export class PromiseA {
  _status: string = 'pending'
  _val: any
  _err: any
  _callbacks: callback[] = []

  constructor (cb: Function) {
    cb(this._resolve.bind(this), this._reject.bind(this))
  }

  _resolve (val: any) {
    if (this._status === 'pending') {
      this._status = 'fulfilled'
      this._val = val
      setTimeout(() => {
        this._callbacks.forEach(e => {
          this._handle(e)
        })
      }, 0)
    }
  }

  _reject (err: any) {
    if (this._status === 'pending') {
      this._status = 'rejected'
      this._err = err
      setTimeout(() => {
        this._callbacks.forEach(e => {
          this._handle(e)
        })
      }, 0)
    }
  }

  _handle (cb: callback): void {
    const { onfulFilled, onRejected, resolve, reject } = cb
    switch (this._status) {
      case 'fulfilled': {
        const res: any = onfulFilled ? onfulFilled.call(this, this._val) : this._val
        if (res instanceof PromiseA) {
          res.then(resolve, reject)
        } else {
          resolve(res)
        }
      } break
      case 'rejected': {
        const res: any = onRejected ? onRejected.call(this, this._err) : this._err
        if (res instanceof PromiseA) {
          res.then(resolve, reject)
        } else {
          reject(res)
        }
      } break
      case 'pending':
        this._callbacks.push(cb)
        break
    }
  }

  then (onfulFilled: Function, onRejected?: Function): PromiseA {
    return new PromiseA((resolve: Function, reject: Function) => {
      this._handle({ onfulFilled, onRejected, resolve, reject } as callback)
    })
  }

  catch (onRejected: Function): PromiseA {
    return new PromiseA((resolve: Function, reject: Function) => {
      this._handle({ onfulfilled: undefined, onRejected, resolve, reject } as callback)
    })
  }
}

interface callback {
  onfulFilled?: Function,
  onRejected?: Function,
  resolve: Function,
  reject: Function
}
