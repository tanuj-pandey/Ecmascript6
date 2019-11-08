function getName( ) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve( 'Ram' );
        }, 10 );
    });
}

function getAge( ) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve( 16 );
        }, 100 );
    });
}
Promise.race( [ getName(), getAge() ] ).then( function( val ){
	console.log(val);
});