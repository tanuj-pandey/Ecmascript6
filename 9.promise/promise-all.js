function getName( ) {
    return Promise.resolve( 'Ram' );
}

function getAge( ) {
    return Promise.reject( 16 );
}

Promise.all( [ getName(), getAge() ] ).then( function( [name, age] ){
	console.log(name);
	console.log(age);
});