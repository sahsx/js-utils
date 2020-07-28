export class EventEmitter {
  private _events = new Map<any, Function[]>()

  public on (evt: any, cb: Function): void {
    let cbs: Function[] | undefined
    if ((cbs = this._events.get(evt))) {
      cbs.push(cb)
    } else {
      cbs = [cb]
      this._events.set(evt, cbs)
    }
  }

  public off (evt: any, cb: Function): void {
    let cbs: Function[] | undefined
    if ((cbs = this._events.get(evt))) {
      for (let i = 0; i < cbs.length; i++) {
        if (cb === cbs[i]) {
          cbs.splice(i, 1)
        }
      }
    }
  }

  public emit (evt: any): void {
    let cbs: Function[] | undefined
    if ((cbs = this._events.get(evt))) {
      for (let i = cbs.length - 1; i > -1; i--) {
        cbs[i].apply(this)
      }
    }
  }

  public once (evt: any, cb: Function): void {
    let cbs: Function[] | undefined
    const _cb = (...args: any[]) => {
      cb.apply(this, ...args)
      this.off(evt, _cb)
    }
    if ((cbs = this._events.get(evt))) {
      cbs.push(_cb)
    } else {
      cbs = [_cb]
      this._events.set(evt, cbs)
    }
  }
}
