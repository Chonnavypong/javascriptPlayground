const user = {
  name: "Jen",
  age: 24,
};

console.log({
  ...user,
});
console.log({
  ...user,
  location: 'Philadephia',
  age: 27
});
console.log({
  age: 27,
  ...user,
  location: 'Philadephia',
});
