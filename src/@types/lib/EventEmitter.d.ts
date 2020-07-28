export interface EventEmitter {
  on: (evt: any, cb: Function) => void

  off: (evt: any, cb: Function) => void

  emit: (evt: any) => void

  once: (evt: any, cb: any) => void
}
