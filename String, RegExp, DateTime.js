//1
const string = 'ahb acb aeb aeeb adcb axeb'
const reg=/a.b/g
console.log(string.match(reg))
//2
const string1 = '2 + 3 223 2223'
const reg1 = /\d...\d/
console.log(string1.match(reg1))

let today = new Date()
console.log(`Today is ${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`)