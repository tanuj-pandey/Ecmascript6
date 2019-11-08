// function multiply ( a, b ) {
//     if ( b === undefined ) {
//         b = 1;
//     }
//     return a * b;
// }
// console.log( multiply( 2 ) );
// console.log( multiply( 2, 3 ) );

/**Set default parameter b to 1 */
// function multiply ( a, b = 1 ) {
//     return a * b;
// }
// console.log( multiply( 2 ) );
// console.log( multiply( 2, 3 ) );

// function sort() { //infinite arguments a, b, c, ...
//     console.log( arguments );
//     console.log( arguments.sort() ); //Will throw an error
// }
// sort( 1, 2, 3, 4 );

/**
 * Putting rest operator in the front of the last format parameter
 * means that it will receive all remaining actual parameters in an Array
 */
// function sort( x, ...values ) { //infinite arguments a, b, c, ...
//     console.log(x);
//     console.log( values );
//     console.log( values.sort() ); 
// }
// sort( 4, 1, 3, 2 );


/**
 * Spread operator allows an expression to expanded
 * in places where multiple arguments (function call)
 * or multiple elements (for array literals)
 * are expected
 */

function sort( x, y, ...values ) { //infinite arguments a, b, c, ... ( rest )
    console.log( values );
    console.log( values.sort() ); //Will throw an error
}
let args = [ 4, 1, 3, 2 ];
sort( ...args ); //spread

let args2 = [ 7, 10, ...args, 55 ]; //spread
sort( ...args2 );



