
console.log('-index.js-');

// var ibm=ibm||{}
// ibm.mod1.doWork();


//----------------------------------------

let mod = require('ibm-aug-greet')
mod.saySomething();
mod.saySomething();

mod.greet();
mod.greet('en');
mod.greet('ka');

//----------------------------------------

// import { item1, item2 } from './hotel/menu';
// import { item1 as b1, item2 as b2 } from './hotel/menu';
// import * as items from './hotel/menu';

import primaryItem, { curd,some } from './hotel/menu'
