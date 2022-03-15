const MyPromise = require("./MyPromise2")
let promise = new Promise((resolve, reject) => {
  // resolve('success')
  return 
  // reject("error")
  // throw new Error("fdsfds")
  // setTimeout(() => {
  //   reject('success')
  // }, 2000)
})
promise.then(
  (value) => {
    // return promise
  },
  (reason) => {
    console.log("rejected1", reason)
  }
)
// promise.then(
//   (res) => {
//     console.log("fullfiled2", res)
//   },
//   (reason) => {
//     console.log("rejected2", reason)
//   }
// )

// let promise1 = new MyPromise((resolve, reject) => {
//   resolve("Promise1")
// })

// let promise2 = promise1.then(
//   () => {
//     // return new Error('Error')
//     // return Promise.resolve('Promise resolve')
//     // return 'then promise'
//     return new MyPromise((resolve,reject)=> {
//       setTimeout(() => {
//         resolve(new MyPromise((resolve,reject) => {
//           resolve(new MyPromise((resolve,reject) => {
//             resolve('new Promise resolve')
//           }))
//         }))
//       }, 2000)
//     })
//   },
//   (reason) => {
//     return reason
//   }
// )

// promise2.then().then().then().then(
//   (value) => {
//     // console.log(value)
//     throw Error('Error')
//   },
//   (reason) => {
//     console.log(reason)
//   }
// )
// .catch((e) => {
//   console.log(e);
// })
