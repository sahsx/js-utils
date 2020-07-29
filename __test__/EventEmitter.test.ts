import { EventEmitter } from '../src/lib/EventEmitter'

test('eventEmitter test', (done) => {
  const emitter = new EventEmitter()
  let a = 1
  emitter.on('start', () => {
    a = 5
  })
  emitter.emit('start')
  setTimeout(() => {
    expect(a).toBe(5)
    done()
  }, 0)
})
