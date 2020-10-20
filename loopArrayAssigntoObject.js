/*

Note Object และ array การ assign ค่าเป็นการ assign address ตำแหน่งหน่วยความจำ ถ้าตัว obj ต้นทางเปลี่ยนปลายทางก็เปลี่ยนตาม
แก้ปัญหาด้วย shallow copy หรือ let objCopy = JSON.parse(JSON.stringify(arrObj))
*/

const arrData = [
  [1, 2, 3, 4, 5, 6],
  ["A", "B", "C", "D", "E", "F"],
  ["a1", "b1", "c1", "d1", "e1", "f1"],
];
const arrObj = { a: { c: "", d: "", e: "" }, b: { c: "", d: "", e: "" } };
const c = "",
  d = "",
  e = "";

const arr2 = [];
const objDeepKey = deepKeys(arrObj);

arrData.map((items, i1) => {
  for (let i = 0; i < objDeepKey.length; i++) {
    items.map((data, i3) => {
      if (i === i3) {
        let point = objDeepKey[i].indexOf(".");
        arrObj[objDeepKey[i].slice(0, point)][
          objDeepKey[i].slice(point + 1)
        ] = data;
        if (i === objDeepKey.length - 1) {
          let objCopy = JSON.parse(JSON.stringify(arrObj))
          arr2.push(objCopy);
        }
      }
    });
  }
});

console.log(arr2);