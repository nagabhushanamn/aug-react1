

// HOP ==> higher order programming


/* function f1() {
    console.log('before log');
    console.log('f1()')
    console.log('after log');
}

function f2() {
    console.log('before log');
    console.log('f2()')
    console.log('after log');
}
f1();
f2(); */

//----------------------------------

function f1() {
    console.log('f1()')
}

function f2() {
    console.log('f2()')
}

function logWrapper(f) {
    return function () {
        console.log('before log');
        f();
        console.log('after log');
    }
}

let f1WithLog = logWrapper(f1);
f1WithLog();
let f2WithLog = logWrapper(f2);
f2WithLog();