function getName( ) {
    return Promise.resolve( 'Ram' );
}

function getAge( ) {
    return Promise.resolve( "test" );
}

Promise.all( [ getName(), getAge() ] ).then( function( [name, age] ){
	console.log(name);
	console.log(age);
}).catch( err => {
    console.log( err );
} );