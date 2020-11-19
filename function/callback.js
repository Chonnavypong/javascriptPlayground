function tryMe(param1, param2) {
  console.log(param1 + " and " + param2);
}

function callbackTester(callback) {
  callback(arguments[1], arguments[2]);
}

callbackTester(tryMe, "hello", "goodbye");

//==============================================================
function showResult(error, result) {
  if (error) return console.log("Error ", error);
  if (result) return console.log("Data ", result);
}

function mainFn(param1, param2, callback) {
  let err, data;
  if (param1 + param2 < 10) err = "ERROR sum is lower than 10";
  if (param1 + param2 >= 10) data = param1 + param2;
  callback(err = undefined, data)
  // if (! err) callback(data)
  // if (err) callback( err = undefined, data)
}

mainFn(2, 3, showResult);
mainFn(8, 3, showResult);

mainFn(8, 5, (err, result) => {
  if (err) console.log("EEEEE");
  console.log("RESULT : ", result);
});

mainFn(10, 20, (err, data) => {
  if (err) throw new Error("It Error");
  console.log("Mutation data to : ", (data += 20));
});
try {
  mainFn(1, 2, (err, data) => {
    if (err) throw new Error("It Error");
    console.log("Mutation data to : ", (data += 20));
  });
} catch (error) {
  console.log("Catch : ", error);
}

mainFn(10, 20, (_, data) => {
  // if (err) throw new Error ('It Error')
  console.log("Mutation data to : ", (data += 20));
});
mainFn(10, 20, ( data) => {
  // if (err) throw new Error ('It Error')
  console.log("Mutation data to : ", (data += 20));
});

//==============================================================
