const date = new Date()

const yy = date.getFullYear().toString().slice(2)
const mm = (date.getMonth()+1).toString().padStart(2, '0')
const dd = date.getDate().toString().padStart(2, '0')
console.log( date.getTimezoneOffset()/60 )
console.log(date.toLocaleTimeString())
console.log(date.getTime()/1000, Date.now())
console.log(Math.trunc(date.getTime()/1000))
console.log(yy, mm, dd)
const ms = date.getTime()
console.log(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}))
console.log(new Date().toLocaleString("th-TH", {timeZone: "Asia/Bangkok"}).valueOf(), new Date(ms))

// Inventrory - Lot ID & S/N no
const utcTime = Date.UTC(2020, 10, 13, 8, 10, 0)
// สร้าง function ของ inventory s/n, stock-lot
console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())

console.log(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()))

console.log(utcTime ,new Date())
console.log( Date.now(), new Date(Date.now()))

console.log('1605255385000'.length)