/**
 * Promise object is used for asynchronous computations.
 * Promise is one of the three states viz., pending, fulfilled or rejected.
 */

/**Async. call - callback function */
function getName( cb ) {
    setTimeout( function() {
        return cb( 'Ram' );
    }, 1000 );
}

function getAge( cb ) {
    setTimeout( function() {
        return cb( 16 );
    }, 1000 );
}

getName( function( name ) {
    console.log( name );
    getAge( function( age ){
        console.log( age );
    });
});