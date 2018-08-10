
//--------------------------------------------------------------------------------------------------
/*
    How to create object ?

    syntax:
        let ref=new Constructor();

*/

//--------------------------------------------------------------------------------------------------

// Es5  ( class )

/* function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " old");
}
 */

 //--------------------------------------------------------------------------------------------------

// Es6  ( class )

class Person {
    constructor(name, age) {
        // instance variable
        this.name = name;
        this.age = age;
        console.log("Person::constructor");
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}

// let p1 = new Person('Nag', 34);

//--------------------------------------------------------------------------------------------------

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log('Employee::constructor()');
    }
    askForBonus() {
        return this.salary * 0.02;
    }
}
//--------------------------------------------------------------------------------------------------

class Boss extends Employee {
    askForBonus() {
        return this.salary * 0.2 + super.askForBonus();
    }
}

let b = new Boss("Nag", 34, 1000)

//--------------------------------------------------------------------------------------------------

class Abc {
    static staMethod() {
        //...
    }
}
Abc.staVar = 1;

Abc.staMethod();

//--------------------------------------------------------------------------------------------------