function isPhoneNumber(number) {
  const mobileReg = /^1[3456789]\d{9}$/
  return mobileReg.test(number)
}

export default {
  isPhoneNumber
}