// excutor 执行器函数，同步执行
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class Promise {
  constructor(props) {
    this.status = PENDING // 给promise对象指定status属性，初始值为pending
    this.data = undefined // 给promise对象指定一个用于存储结果数据的属性
    this.callbacks = [] // 每个元素的结构: { onResolved(){}, onRejected(){}}
    const that = this
    // 立即执行excutor
    function resolve(value) {
      // 如果当前状态不是pending，直接结束
      if (that.status !== PENDING) {
        return
      }
      // 将状态改为resolved
      that.status = RESOLVED
      // 保存value数据
      that.data = value
      // 如果有代执行的callback函数，立即异步执行回调
      if (that.callbacks.length > 0) {
        setTimeout(() => {
          //放入队列中执行所有成功的回调
          that.callbacks.forEach((callbacksObj) => {
            callbacksObj.onResolved(value)
          })
        })
      }
    }
    function reject(reason) {
      // 如果当前状态不是pending，直接结束
      if (that.status !== PENDING) {
        return
      }
      // 将状态改为resolved
      that.status = REJECTED
      // 保存value数据
      that.data = reason
      // 如果有代执行的callback函数，立即异步执行回调
      if (that.callbacks.length > 0) {
        setTimeout(() => {
          //放入队列中执行所有成功的回调
          that.callbacks.forEach((callbacksObj) => {
            callbacksObj.onRejected(reason)
          })
        })
      }
    }
    try {
      excutor(resolve, reject)
    } catch (err) {
      // 如果执行器抛出异常，promise对象变为reject状态
      reject(err)
    }
  }
  /* 
    promise原型对象的then，成功函数，返回一个新的promise
  */
  then = function (onResolved, onRejected) {
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }
    onResolved =
      typeof onResolved === 'function' ? onResolved : (value) => value
    const that = this
    return new Promise((resolve, reject) => {
      function handle(callback) {
        /**
         * 如果抛出异常，return的promise就会失败，reason就是error
         * 如果没抛异常：
         *  回调函数返回不是promise,return的promise就会成功，value就是返回的值
         *  如果回调函数返回的是promise，return的promise结果就是这个promise的结果
         */
        try {
          const result = callback(that.data)
          if (result instanceof Promise) {
            result.then(
              (value) => {
                resolve(value)
              },
              (reason) => {
                reject(reason)
              }
            )
            // result.then(resolve, reject)
          } else {
            resolve(result)
          }
        } catch (err) {
          reject(err)
        }
      }
      if (that.status === PENDING) {
        that.callbacks.push({
          onResolved(value) {
            handle(onResolved)
          },
          onRejected(reason) {
            handle(onRejected)
          },
        })
      } else if (that.status === RESOLVED) {
        setTimeout(() => {
          handle(onResolved)
        })
      } else {
        setTimeout(() => {
          handle(onRejected)
        })
      }
    })
  }
  /* 
    promise原型对象的then，失败函数，返回一个新的promise
  */
  catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }
  /* 
    promise函数对象的resolve，返回一个指定结果成功的promise
  */
  static resolve = function (value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }
  /* 
    promise函数对象的reject，返回一个指定reason的失败的promise
  */
  static reject = function (reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
  /* 
    Promise函数对象的方法all  
    只有当所有promise都成功才成功，否则有一个失败的就失败，返回一个promise
  */
  static all = function (promises) {
    const values = new Array(promises.length)
    let resolveCount = 0
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        Promise.resolve(p).then(
          (value) => {
            resolveCount++
            values[index] = value
            if (resolveCount === promises.length) {
              resolve(values)
            }
          },
          (reason) => {
            reject(reason)
          }
        )
      })
    })
  }
  /* 
    Promise函数对象的方法race 
    结果由第一个完成的promise决定,返回一个promise
  */
  static race = function (promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        Promise.resolve(p).then(
          (value) => {
            resolve(value)
          },
          (reason) => {
            reject(reason)
          }
        )
      })
    })
  }
  /**
   * 返回一个promise对象，它在指定的时间后才确定结果
   */
  static resolveDelay = function (value, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value instanceof Promise) {
          value.then(resolve, reject)
        } else {
          resolve(value)
        }
      }, time)
    })
  }
  /**
   * 返回一个promise对象，它在指定的时间后才失败
   */
  static rejectDelay = function (value, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(reason)
      }, time)
    })
  }
}
window.Promise = Promise
