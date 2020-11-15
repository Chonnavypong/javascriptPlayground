'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const testPromise = function() {
  return new Promise( function( resolve, reject ){
    const x = 23
    reject(`Reject ${x}`)
  })
}

testPromise().catch(err => console.log(err))