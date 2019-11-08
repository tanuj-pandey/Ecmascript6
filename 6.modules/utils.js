/**Js Module pattern provides a way to wrap
 * public, private methods and variables into a single entity.
 * The functions or variables defined in a module are not visible outside
 * unless we explicity export them
 */
export function add ( x, y ) {
    return x + y;
}

export function subtract ( x, y ) {
    return x - y;
}

export default function greetings() {
    console.log( 'Hello' );
    return true;
}


