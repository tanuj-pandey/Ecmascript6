
// var x;
// x = 3;
// console.log(x);
// x = 5;
// console.log(x);

/**Period between entering scope and being declared where they cannot be accessed - TDZ*/
// let x = 3;
// console.log(x);

// {
//     let x = 5; //Cannot re-declare
//     console.log(x);
// }
// console.log(x);



// var x = 3;
// console.log(x);
// x = 5;
// console.log(x);

// let x = 3;
// console.log(x);
// x = 5;
// console.log(x);

// var x = 3;
// console.log(x);
// let x = 5; //Cannot re-declare

/**Constant */

// const PI = 3.142;
//PI = 3.1415; //Cannot re-assign constant

// const PI; //need to assign a value while declaring

// const arr = [ 1, 2 ]; //Object reference - pointer refers to the stored memory
// console.log( arr );
// arr.push( 3 );
// console.log( arr );
//arr = [1]; //we cannot re-assign to a constant Objects


/**Block Scope*/

// var i = 1;
// if( true) {
//     var i = 2;
// }
// console.log(i);

// let i = 1;
// if( true) {
//     let i = 2;
//     console.log(i);
// }
// console.log(i);

// const i = 1;
// if( true) {
//     const i = 2;
//     console.log(i);
// }
// console.log(i);



/**
 * In ES6 accessing a let or const variable before its declaration within its scope
 * causes a ReferenceError. (TDZ = Temporal Dead Zone)
 * Resons:
 * 1. To catch programming error
 * 2. for const: making const work properly is difficult
 * 3. Future proofing for guards: A mechanism for enforcing at runtime that a variable has
 * correct value think runtime type check.
 */

//  function fun() {
//      console.log( count );
//      let count = 4;
//  }
//  fun();
