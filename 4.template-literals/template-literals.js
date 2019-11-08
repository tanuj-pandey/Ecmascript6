/**
 * Template Literals
 * new kind of string literals
 * allows to use multiple lines strings and expressions
 * Template literals can be enclosed by the back-tick `...` instead of double or single quotes
 * Expression can be indicated by dollar sign and curly braces ${...}
 */

// var name = 'Jack;'
// var age = 12;
// var str = 'Hello, my name is ' + name + 'and my age is' + age;
// console.log( str );

/**Interpolation - Intepolate a variable or an expression */
// var name = 'Jack'
// var age = 16;
// var str = `Hello, my name is ${name} and my age is ${age}`;
// console.log( str );

// var str = `Addition of 2+2 = ${2+2}`;
// console.log( str );

/**Multiline */
// var str = 'Hello\n'
//         + 'my name is Jack';
// console.log( str );

// var str = `Hello
// my name is Jack`;
// console.log( str );


/**Tags */
// let name = 'Jack';
// let age = 20;
// function tagsFn( str, ...values ) {
//     console.log( str );
//     console.log(values);
//     console.log( name );
//     console.log( age );
// }

// tagsFn `Hello, my name is ${name} and my age is ${age}`;

/**Raw */
function tagsFn( str, name, age ) {
    console.log( str[0] );
     console.log( str.raw[0] );
 }

 tagsFn `Hello,\nmy name is Jack \nand my age is 20`;

