/**
 * Javascript has been a prototypal based language using object prototypes
 * to create object inheritance and code reuse.
 * Class adds a new syntax on top of traditional prototypes.
 */

// function Person( name, age ) {
// 	this._name = name;
// 	this._age = age;
// this.getAge = function () {
// 	return this._age;
// }
// }	



// var p1 = new Person( 'Ram', 16 );
// console.log( p1.getAge() );

class Person {
    constructor( name, age ) {
        this._name = name;
        this._age = age;
    }

    get name( ) {
        return this._name + '!';
    }

    set name( name ) {
        this._name = name + '!!';
    }

    greeting2() {

    }
}

class Student extends Person {
    constructor( name, age, grade ) {
        super(name, age);
        this._grade = grade;
    }

    static greetings( ){
        console.log( "Hello, welcome!" );
    }

    greeting2() {
        super.greeting2();
    }
}

 Student.greetings();

var s1 = new Student( 'Ram', 16, 'A+' );
console.log( s1.name );

s1.name = 'Raghuram';
console.log( s1.name );



