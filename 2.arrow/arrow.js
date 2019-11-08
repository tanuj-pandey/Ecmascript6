// var greetings = function( name, city ) {
//     console.log( 'Hello' );
//     console.log ( 'Welcome '+ name + ' to '+ city );
// }
// greetings( 'Ram', 'Pune' );

/**
 * Arrow function is always anonomyous function
 */

// var greetings = ( name, city ) => {
//     console.log( 'Hello' );
//     console.log ( 'Welcome '+ name + ' to '+ city );
// }
// greetings( 'Raghuram', 'US' );

// function add( x, y ) {
//     return x + y;
// }
// console.log( add( 1, 2 ) );

// let add = ( x, y ) => x + y;
// console.log( add( 2, 2 ) );

// function squares( num ){
//     return Math.pow( num, 2 );
// }
// console.log( squares( 3 ) );

// let squares = num => Math.pow( num, 2 ); //Shorter syntax
// console.log( squares( 4 ) );

/**this is picked from lexical scope */

// function Person () {
//     var that = this;
//     that.name = 'Ram';
//     setTimeout( function() {
//         console.log( that.name );
//     }, 1000 );
// }
// let p = new Person();


function Person () {
    this.name = 'Ram';
    setTimeout( () => console.log( this.name ), 1000 );
}
let p = new Person();