const data = [
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: 1, parent: "5fb5e94caaaafa552581a4cd" },
  { name: 2, parent: "5fb5e94caaaafa552581a4cd" },
  { name: 3, parent: "5fb5e94caaaafa552581a4cd" },
  { name: 4, parent: "5fb5e94caaaafa552581a4ce" },
  { name: 5, parent: "5fb5e94caaaafa552581a4ce" },
  { name: 6, parent: "5fb5e94caaaafa552581a4cf" },
];

const input = [
  { name: 9, parent: "5fb5e94caaaafa552581a4cd" },
  { name: "G" },
  { name: "H" },
  { name: "I" },
  { name: "J" },
  { name: 7, parent: "5fb5e94caaaafa552581a4ce" },
  { name: 8, parent: "5fb5e94caaaafa552581a4cd" },
  { name: 10, parent: "5fb5e94caaaafa552581a4ce" },
  { name: 11, parent: "5fb5e94caaaafa552581a4cf" },
  { name: 12, parent: "5fb5e94caaaafa552581a4cd" },
  { name: 13, parent: "5fb5e94caaaafa552581a4cf" },
  { name: 14, parent: "5fb5e94caaaafa552581a4cd" },
  { name: 15, parent: "xxxxxxx" },
];
/*
  Need Array of Object 
  [
    {
    parent: "5fb5e94caaaafa552581a4cd",
    length: 3
  },{
    parent: "5fb5e94caaaafa552581a4ce",
    length: 2
  },{
    parent: "5fb5e94caaaafa552581a4cf",
    length: 1
  }
]
*/

const parentList = [...new Set(data.map((el) => el.parent))];
console.log("A) Parent List ");
console.log(parentList);

const arr = [];
const obj = {};

const groupExistingDataByParent = parentList.map((el) => {
  return {
    parent: el,
    length: data.filter((elF) => {
      return el === elF.parent;
    }).length,
  };
});
console.log("1) -----------");

console.log(groupExistingDataByParent);

const existingP = parentList.map((el) => {
  return {
    parent: el,
    lenght: input.filter((elF) => elF.parent === el).length,
  };
});
// const newParent = parentList.map(el => input.filter(elF => elF.parent !== el))
console.log("2) -----------");

console.log(existingP);

console.log("3) -----------");

// console.log(newParent)
