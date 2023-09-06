const fs = require('fs')
new Promise((resolve, reject) => {
  fs.readFile('./assets/1.txt',(error,data)=>{
    if(error) reject(error)
    // 不加[]使用push方法会报错
    resolve([data])
  })
}).then(value=>{
  return new Promise((resolve, reject) => {
    fs.readFile('./assets/2.txt',(error,data)=>{
      if(error) reject(error)
      value.push(data)
      resolve(value)
    })
  })
}).then(value => {
  console.log(value.toString())
})