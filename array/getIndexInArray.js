const arr1 = [
  { name: "A", seq: "" },
  { name: "B", seq: "" },
  { name: "C", seq: "" },
  { name: "D", seq: "" },
  { name: "E", seq: "" },
];
console.log('ORIGINAL : -> ', arr1)
for ( let i = 0; i < arr1.length; i++ ) {
  // console.log(arr1[i].name, arr1.findIndex(list => list.name === arr1[i].name))
  arr1[i].seq = arr1.findIndex(list => list.name === arr1[i].name)
}
console.log('AFTER FOR LOOP : -> ', arr1)