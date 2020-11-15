const date = new Date();

const yy = date.getFullYear().toString().slice(2);
const mm = (date.getMonth() + 1).toString().padStart(2, "0");
const dd = date.getDate().toString().padStart(2, "0");

const dateWithTimeZone = date.getTimezoneOffset() / 60;
const dateWtihTimeZoneSting = date.toLocaleTimeString();
const dateWithSetTimeZone = new Date()
  .toLocaleString("th-TH", { timeZone: "Asia/Bangkok" })
  .valueOf();

// Prefix for Inventrory, Lot ID & S/N no
const utcTime = Date.UTC(2020, 10, 13, 8, 10, 0);
// สร้าง function ของ inventory s/n, stock-lot
console.log(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  date.getHours(),
  date.getMinutes(),
  date.getSeconds()
);

console.log(
  Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  )
);

console.log(utcTime, new Date());
console.log(Date.now(), new Date(Date.now()));

console.log("1605255385000".length);

class DateFormatter extends Date {
  getFormattedDate() {
    // prettier-ignore
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new DateFormatter("August 19, 1975 23:15:30").getFormattedDate());
// expected output: "19-Aug-1975"

class DatePrefix extends Date {
  testDate = new Date()
  testYear = this.testDate.getFullYear()

  getUnixTimeStampPrefix() {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const day = newDate.getDate();
    const hours = newDate.getHours();
    const min = newDate.getMinutes();
    const sec = newDate.getSeconds();
    const currentDateTime = Date.UTC(year, month, day, hours, min, sec)
    console.log(`currentDateTime : ${currentDateTime} --> ${currentDateTime.toString().slice(0, 10)}`)
    return currentDateTime.toString().slice(0, 10)
  }
}

const test = new DatePrefix().getUnixTimeStampPrefix();
console.log("Test : ", test);

console.log(Date.now());
