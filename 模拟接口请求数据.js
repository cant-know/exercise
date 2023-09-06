function getUserList(){
  return new Promise((resolve, reject) => {
    // 模拟异步请求
    setTimeout(()=>{
      resolve('请求用户列表成功')
    },1000)
  })
}
function getVideo(){
  return new Promise((resolve, reject) => {
    // 模拟异步请求
    setTimeout(()=>{
      resolve('请求视频成功')
    },3000)
  })
}
// 模拟程序启动
(function(){
  const result = Promise.all([getUserList(),getVideo()])
  result.then(value =>{
    console.log(value)
  })
})()