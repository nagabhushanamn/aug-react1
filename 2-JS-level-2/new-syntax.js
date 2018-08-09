"use strict"


//---------------------------------------
//  de-structuring
//---------------------------------------

// a. array destructuring

// let nums = [10, 20, 30, 40, 50, 60, [70, 80]];

// let n1=nums[0];
// let n2=nums[1];
// let n3=nums[2];

// or

// let [n1, n2, n3, n4 = 400, , n6, [n7, n8]] = nums;
// let n1, n2;
// [n1, n2] = nums;


// b. object destructuring

// let person = { name: 'Nag', age: 34 }

// let myName=person.name;
// let myAge=person.age;

// or

// let { name: myName, age: myAge } = person;
// let { name: name, age: age } = person;
// or
// let { name, age} = person;

// let name, age;
// ({ name, age } = person);


//---------------------------------------
// spread operator
//---------------------------------------

/* 
function func(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
let nums = [10, 20, 30];
// func(nums[0],nums[1],nums[2]);
// or
func(...nums);


let arr1 = [1, 2, 3]
let arr2 = [7, 8, 9]

let newArr = [...arr1, 4, 5, 6, ...arr2];
 */

//---------------------------------------
// octal & binary numbers
//---------------------------------------

// let n=12;
// let n2=012;
// let n3=ob110;

//---------------------------------------
// obj-literal enhancements
//---------------------------------------

// es5

let name = "Nag";
let age = 34;

let p1 = {
    name: name,
    age: age,
    address: "chennai",
    sayName: function () {
        //..
    },

};


// es6
let addressType = "office"; // home | office | vacation
let p2 = {
    name,
    age,
    [addressType + "-address"]: "chennai",  // dynamic property name
    [1 + 2]: 'three',
    sayName() {

    },
    'say Address'() {

    },
    ['say Something']() {

    }

};


//---------------------------------------
// symbol type
//---------------------------------------

/*
  unique & immutable value, used as obj's identifier property
*/

// let s1=Symbol.for('key1');
// let s2=Symbol.for('key1');

// let javaSymbol = Symbol.for('java');
// let jsSymbol = Symbol.for('java');
// let e1 = { name: 'A', [javaSymbol]: 'core java,spring,micro' }
// let e2 = { name: 'A', [javaSymbol]: 'core java,spring' }
// let e3 = { name: 'A', [jsSymbol]: 'core js,react' }



// Quiz

// let menu = ['idly', 'vada', 'poori'];

// let newMenu = [...menu, 'biryani'];
// let [m1, m2, m3] = newMenu;
// for(let m of menu){
//     console.log(m);
// }



// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 id++;
//                 return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true };
//             }
//         };
//     }
// };

// // let ids=[...idMaker];
// let [id1, id2] = idMaker;
// for (let id of idMaker) {
//     console.log(id);
// }



//---------------------------------------
// arrow function
//---------------------------------------


// function expression

// let getPrice = function () {
//     return 100 + 200;
// }

// or

// let getPrice = () => {
//     return 100 + 200;
// }


// let getPrice = (count) => {
//     return count * (100 + 200);
// }
//or
// let getPrice = count => {
//     return count * (100 + 200);
// }


// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }


// let getPrice = (count, tax) => count * (100 + 200) + tax;


// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax;
//     return total;
// }




/*

    why/where we need arrow-function ?

    => to make compact function-argument
    => to capture 'this'

*/


// => to make compact function-argument

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort();
// nums.sort(function (a, b) { return a - b; });
// or
// nums.sort((a, b) => { return a - b; });
// or
// nums.sort((a, b) => a - b);
// console.log(nums);



// => to capture 'this'

/* 
let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching");
        // let askQues = function (q) {
        //     console.log(this.name + " answering " + q);
        // }
        // or
        let askQues = (q) => {
            console.log(this.name + " answering " + q);
        }
        console.log('teaching ends..');
        return askQues;
    }
};

let askQues = tnr.doTeach();
askQues('when will u leave us?'); 
askQues.call(tnr, "Q1")

let anotherTnr = { name: 'kishore' }
askQues.call(anotherTnr, "Q2"); */



//---------------------------------------------------------



/* 
let regFunc = function () {
    console.log(this);
}
regFunc();
let arrFunc = () => {
    console.log(this);
};
arrFunc();

let person = {
    name: 'Nag',
    f1: regFunc,
    f2: arrFunc
};
person.f1();
person.f2(); */



// let inv = {
//     num: 123,
//     process: function () {
//         console.log(this.num + " processed")
//     }
// };



// let inv = {
//     num: 123,
//     process: () => {
//         console.log(this.num + " processed")
//     }
// };



// let inv = {
//     num: 123,
//     process: function () {
//         console.log(this.num + " processed partially")
//         return function () {
//             console.log(this.num + " processed completly")
//         }
//     }
// };

// let inv = {
//     num: 123,
//     process: function () {
//         console.log(this.num + " processed partially")
//         return () => {
//             console.log(this.num + " processed completly")
//         }
//     }
// };
// let complete = inv.process();
// complete();


//-----------------------------------------------------------


// new collections

// set , map

..
