/**
 * Special syntax to work with promises in a more comfortable fashion, called "async/await"
 */
function getName( ) {
    return Promise.resolve( 'Ram' );
}

function getAge( ) {
    return Promise.resolve( 16 );
}

/**
 * The word "async" before a function means one simple thing: 
 * a function always returns a promise. 
 * Even If a function actually returns a non-promise value, 
 * prepending the function definition with the "async" keyword directs Javascript to 
 * automatically wrap that value in a resolved promise.
 */
async function f() {
    return 1;
}
console.log( f() );
f().then(i => console.log(i));

/**
 * Above function is same as
 */

// function f() {
//     return Promise.resolve(1);
// }
// f().then(i => console.log(i));

async function getData() {
    /**The keyword await makes JavaScript wait until that promise settles and returns its result. */
    const name = await getName();
    console.log( name );
    const age = await getAge();
    console.log( age );
}

async function getDetails() {
    const [ name, age ] = await Promise.all( [ getName(), getAge() ] );
    console.log( name );
    console.log( age );
}

getData();
getDetails();