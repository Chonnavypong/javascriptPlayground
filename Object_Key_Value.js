const bom = [
  [
    "-",
    "",
    "",
    "-",
    "",
    "",
    "213030010012",
    "LD4A-6",
    1,
    "321010030045",
    "PA-LD4A-6-60",
    1,
    "514010040017",
    "ELG-150H-48A",
    1,
    "417020020018",
    "TP20D",
    1,
    "PS-200600019",
    "SCL",
    "122010010018",
    "AWG16 - Red",
    "",
    "122010010020",
    "AWG16 - Black",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  [
    "PCB SKU",
    "PCB Model",
    "PCB Q'TY",
    "LED SKU",
    "LED Model",
    "LED Q'TY",
    "Fixture SKU",
    "Fixture Kit",
    "Fixture Q'TY",
    "PCBA SKU",
    "PCBA Model",
    "PCBA Q'TY",
    "Driver SKU",
    "Driver Model",
    "Driver Q'TY",
    "Surge SKU",
    "Surge Model",
    "Surge Q'TY",
    "Wire DC 1 SKU",
    "Wire DC 1 Model",
    "Wire DC 1 Q'TY",
    "Wire DC 2 SKU",
    "Wire DC 2 Model",
    "Wire DC 2 Q'TY",
    "Wire AC SKU",
    "Wire AC Model",
    "Wire AC Q'TY",
    "Silicon SKU",
    "Silicon Model",
    "Silicon Q'TY",
    "Thermal_Couple SKU",
    "Thermal_Couple Model",
    "Thermal_Couple Q'TY",
    "Connector 1 SKU",
    "Connector 1 Model",
    "Connector 1 Q'TY",
    "Connector 2 SKU",
    "Connector 2 Model",
    "Connector 2 Q'TY",
    "Terminal SKU",
    "Terminal Model",
    "Terminal Q'TY",
    "Cable Gland SKU",
    "Cable Gland Model",
    "Cable Gland Q'TY",
  ],
];
let main = [
  "pcb",
  "led",
  "fixture",
  "pcba",
  "driver",
  "surge",
  "wireDc1",
  "wireDc2",
  "wireAc",
  "silicon",
  "thermalCouple",
  "connector1",
  "connector2",
  "terminal",
  "cableGland",
];

let sub_main = ["sku", "model", "qty"];

let reqObj = {};

main.map((item) => {
  reqObj[item] = {};
  sub_main.map((subItem) => {
    reqObj[item][subItem] = "";
  });
});

const isPlainObject = (x) => Object(x) === x && !Array.isArray(x);

const formatKey = (...segments) => segments.join(".");

const deepKeys = (item, pre = [], acc = []) =>
  Object.keys(item).reduce(
    (acc, key) =>
      isPlainObject(item[key])
        ? [...acc, ...deepKeys(item[key], [...pre, key], acc)]
        : [...acc, formatKey(...pre, key)],
    []
  );

const bomList = [];
const objDeepKey = deepKeys(reqObj);
console.log(objDeepKey.length);

bom.map((bomItems, indexBom) => {
  objDeepKey.map((mainItem, indexMain) => {
    for (let index = 0; index < bomItems.length; index++) {
      if (indexMain === index) {
        let splitPoint = mainItem.indexOf(".");
        reqObj[mainItem.slice(0, splitPoint)][mainItem.slice(splitPoint + 1)] =
          bomItems[index];
        if (index === objDeepKey.length - 1) {
          let objCopy = JSON.parse(JSON.stringify(reqObj));
          bomList.push(objCopy);
        }
      }
    }
  });
});
console.log(bomList);


