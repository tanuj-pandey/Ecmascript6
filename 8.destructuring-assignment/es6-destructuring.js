/** Destructuring is a convenient way of extracting values 
 * from data stored in possibly nested objects 
 * and Arrays */


// var arr = [ 'Ram', 16 ];
// var name = arr[ 0 ];
// var age = arr[ 1 ];
// console.log( name );
// console.log( age );

// const [ name, age ] = [ 'Ram', 16 ];
// console.log( name );
// console.log( age );


// const {
//     name,
//     age
// } = {
//     name : 'Ram',
//     age: 16
// }

// console.log( name );
// console.log ( age );


// const {
//     name: newName,
//     age
// } = {
//     name : 'Ram',
//     age: 16
// }

// console.log( newName );
// console.log ( age );

// const {
//     name: newName,
//     age,
//     details: {
//         grade: newGrade
//     }
// } = {
//     name : 'Ram',
//     age: 16,
//     details: {
//         grade : 'A+'
//     }
// }

// console.log( newName );
// console.log ( age );
// console.log( newGrade );

var arr = [{
    "abc": 123,
    "xyz": "yahoo",
    "show": "yes"
},
{
    "abc": 1234,
    "xyz": "google",
    "show": "no"
},
{
    "abc": 12345,
    "xyz": "google",
    "show": "no"
}];

var bcd = arr.filter((value)=>{
    return (value.show === 'no');
});
var final = bcd.map((value)=> {
    return value.abc;
});
final


// const [ name, age = 15 ] = [ 'Ram' ];
// console.log( name );
// console.log( age );


// const {
//     name: newName,
//     age = 15
// } = {
//     name : 'Ram'
// }

// console.log( newName );
// console.log ( age );