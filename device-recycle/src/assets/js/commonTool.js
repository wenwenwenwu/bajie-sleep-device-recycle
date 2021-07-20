function isPhoneNumber(number) {
  const mobileReg = /^1[3456789]\d{9}$/
  return mobileReg.test(number)
}

function getURLData() {
  //获取浏览器地址栏中URL字符串
  let tempStr = window.location.href 
  //获取URL中携带的信息对象
  let tempArr = tempStr.split('?')[1] ? tempStr.split('?')[1].split('&') : []
  let returnArr = {}
  tempArr.forEach(element => {
    returnArr[element.split('=')[0]] = element.split('=')[1]
  })
  return returnArr
}

export default {
  isPhoneNumber,
  getURLData
}