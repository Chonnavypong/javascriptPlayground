const before = 20201000018
let value = before
let sum = 0

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(`${before}${sum%10}`);

let a = 2
let b = a
b = 5

console.log(a, b)