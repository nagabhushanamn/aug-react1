(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


// var o={
//     doWork:function(){
//         console.log('im mod2');
//     }
// };


//---------------------------------------
// var ibm = ibm || {};
// (function () {
//     ibm.mod3.doWork();
//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };
//     ibm.mod2 = o;
// })();
//---------------------------------------

function greet(){
    console.log('Hello..');
}
module.exports=greet;
},{}],2:[function(require,module,exports){


// var o={
//     doWork:function(){
//         console.log('im mod1');
//     }
// };


//---------------------------------------

// var ibm = ibm || {};
// (function () {
//     ibm.mod2.doWork();
//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };
//     ibm.mod1 = o;
// })();
//---------------------------------------

console.log('-greet/index.js-');

let en=require('./en');
let ka=require('./ka');

let message = "wat to say";
function saySomething() {
    console.log(message)
}
function greet(lang){
    if(lang==="en"){
        en();return;
    }
    if(lang==="ka"){
        ka();return;
    }
    console.log('say ur language');
}
module.exports={
    saySomething,
    greet
};


},{"./en":1,"./ka":3}],3:[function(require,module,exports){


// var o={
//     doWork:function(){
//         console.log('im mod3');
//     }
// };


//---------------------------------------
// var ibm=ibm||{};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };
//     ibm.mod3=o;
// })();
//---------------------------------------


function greet(){
    console.log('namaskara..');
}
module.exports=greet;
},{}],4:[function(require,module,exports){

console.log('-index.js-');

// var ibm=ibm||{}
// ibm.mod1.doWork();


//----------------------------------------

let mod=require('ibm-aug-greet')
mod.saySomething();
mod.saySomething();

mod.greet();
mod.greet('en');
mod.greet('ka');


},{"ibm-aug-greet":2}]},{},[4]);
