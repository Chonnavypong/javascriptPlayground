'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const testPromiseResolve = function () {
  return new Promise(function (resolve, reject) {
    const x = 23;
    resolve(`Reject ${x}`);
  });
};

testPromiseResolve().catch((err) => console.log(err));

const testPromiseReject = function () {
  return new Promise(function (resolve, reject) {
    const x = 23;
    reject(`Reject ${x}`);
  });
};

testPromiseReject().catch((err) => console.log(err));
