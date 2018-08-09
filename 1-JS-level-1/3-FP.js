"use strict"



/*
//--------------------------------------------------------------------
    how to define/create 'function' in .js-lang ?
//--------------------------------------------------------------------

/*

         1. function-declaration
            => Named function
            => function-obj created at scope-creation phase
            => always get hoisted with function-obj

         2. function-expression
            => Anonymous function
            => function-obj created at scope-execution phase
            => not get hoisted with function-obj

*/


//-------------------------------------------------------------------------
// 1. function-declaration
//--------------------------------------------------------------------
/* 
console.log(add(12,13));
function add(n1,n2){
    return n1+n2;
}
console.log(add(12,13)); */


//-------------------------------------------------------------------------
// 2. function-expression
//--------------------------------------------------------------------

/* console.log(add(12,13)); // error
var add = function (n1, n2) {
    return n1 + n2;
}
console.log(add(12,13)); */


//-------------------------------------------------------------------------
// function with params
//--------------------------------------------------------------------

// imp-note : function params are optional in .js-language

/* function func(a,b){
    console.log(a)
    console.log(b);
    console.log(arguments);
}
func(12,13,14,15); */

// e.g

/* function sum(){
    let i=0,
        len=arguments.length,
        result=0;
    while(i<len){
        result+=arguments[i];
        i++;
    }    
    return result;
} */



//--------------------------------------------------------------------
// Quiz
//--------------------------------------------------------------------

// can we overload function by params in .js-lang ?  No

/* function getFood() {
    return "No Food";
}
function getFood(pay) {
    if (arguments.length === 0) return "No Food";
    return "Biryani";
}
console.log(getFood());
 */

//--------------------------------------------------------------------
// function with default params ( es6 )
//--------------------------------------------------------------------


/* function func(a = 1, b = 2) {
    // if (!a) a = 1
    // if (!b) b = 2
    //     // or
    // a = a || 1;
    // b = b || 2;
    console.log(a);
    console.log(b);
}
func(undefined, 20); */

//--------------------------------------------------------------------
// function with rest-param ( es6 )
//--------------------------------------------------------------------

/* 
function func(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
    console.log(Array.isArray(rest));
}
func(10, 20, 30, 40, 50, 60) */


//--------------------------------------------------------------------
// FP - principles
//--------------------------------------------------------------------
/*
Functions as Values/objects
    STORE functions in variables
    PASS functions in parameters
    RETURN functions from other functions
*/

//--------------------------------------------------------------------
// STORE functions in variables
//--------------------------------------------------------------------

/* function greet(){
    console.log('hello..');
}

let sayHello=greet;
sayHello(); */

//--------------------------------------------------------------------
// PASS functions in parameters
//--------------------------------------------------------------------
/* 
function greet(f) {
    if (f) { f(); return }
    console.log('Hello...');
}
greet();
let kaGreet=function(){console.log('Namaskara..')}
greet(kaGreet);
greet(function(){console.log('Ola..')});

// e.g

let nums=[1,3,5,7,9,2,4,6,8,10];
// nums.sort();
let asc=function(a,b){return a-b;}
nums.sort(asc);
console.log(nums); */

//------------------------------------------------------------
// RETURN functions from other functions
//------------------------------------------------------------

/* 
function teach() {
    console.log('teaching....');
    let learn = function () {
        console.log('learning...');
    }
    // learn();
    console.log('teaching ends..');
    return learn;
}

let learnFunc=teach();
learnFunc();
learnFunc(); */

//------------------------------------------------------------
// closure(s)
//------------------------------------------------------------

/*
    A closure is a function having access to the parent scope,
    even after the parent function has closed.
*/

function teach(sub) {
    console.log('teaching ' + sub);
    let notes = sub + "-notes";
    let fun = "bla bla bla ";
    let learn = function () {
        console.log('learning...with ' + notes);
    }
    //learn();
    console.log('teaching ends..');
    return learn;
}

let learnFunc = teach('.js');
learnFunc();



//------------------------------------------------------------

/*
    why/where we need closures ?
        - to abstract public-behav of any js-module
        - while executing func async, to access parent scope
*/

//------------------------------------------------------------