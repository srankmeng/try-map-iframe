import LCC from 'lightning-container'

const callApex = (controller, mockResult, ...params) => {
  // console.log(params)

  // if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockResult)
      }, 100)
    })
  // } else {
  //   console.log('controller, params', controller, params)

  //   return new Promise((resolve, reject) => {
  //     LCC.callApex(
  //       controller,
  //       ...params,
  //       (result, event) => {
  //         if (event.status) {
  //           resolve(result)
  //         } else if (event.type === 'exception') {
  //           reject(event)
  //           console.log(event.message + ' : ' + event.where)
  //         } else {
  //           reject(event)
  //           console.log('Unknown Error', event)
  //         }
  //       },
  //       { escape: true }
  //     )
  //   })
  // }
}

export default callApex
