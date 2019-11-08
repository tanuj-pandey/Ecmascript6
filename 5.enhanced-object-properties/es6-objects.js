// var obj = {
// 	firstName: 'Ram',
// 	age: 16
// };
// console.log( obj );

// var firstName = 'Ram';
// var age = 16;
// var obj1 = {
// 	firstName: firstName,
// 	age: age
// };
// console.log( obj1 );

/**Property Shorthand */

// var firstName = 'Ram';
// var age = 16;
// var obj = {
// 	firstName,
//     age,
// };
// console.log( obj );

/**Computed Property Names */
// var firstName = 'Ram';
// var age = 16;
// var key = 'objKey';
// function getKey() {
//     return 'hello';
// };
// var obj = {
// 	firstName,
//     age,
//     [key]: 'objValue',
//     ['grade']: 'A+',
//     [getKey()]: 'xyzz'
// };
// console.log( obj );


/** Old Way*/
// var firstName = 'Ram';
// var age = 16;
// var obj1 = {
// 	firstName: firstName,
// 	age: age,
// 	newFunction: function() {
//         console.log( 'this is a new function' );
//     }
// };
// console.log( obj1 );
// obj1.newFunction();

/**Method Properties */
var firstName = 'Ram';
var age = 16;
var key = 'objKey';
function getKey() {
    return 'hello';
};
var obj = {
	firstName,
    age,
    newFunction () {
        console.log( 'this is a new function' );
    }
};
console.log( obj );
// obj.newFunction();