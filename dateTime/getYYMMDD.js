const date = new Date()

const yy = date.getFullYear().toString().slice(2)
const mm = date.getMonth().toString().padStart(2, '0')
const dd = date.getDate().toString().padStart(2, '0')
console.log(yy, mm, dd)