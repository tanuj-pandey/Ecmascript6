
function getName( ) {
    return Promise.resolve( 'Ram' );
}

function getAge( ) {
    return Promise.resolve( 16 );
}

getName().then(name => {
    console.log(name);
    return getAge();
}).then(age => console.log(age));