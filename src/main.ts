const a:Number = 1
console.log(a)

class Animal {
    name:String
    constructor () {
      this.name = 'animal'
    }
}

const am = new Animal();

(() => {
  console.log('this is lambda fuction,and animal name:' + am.name)
})()

declare interface PromiseConstructor {
    allSettled(promises: Array<Promise<any>>): Promise<Array<{status: 'fulfilled' | 'rejected', value?: any, reason?: any}>>;
}
Promise.allSettled([]).then(() => { console.log('promise allSettled') })
