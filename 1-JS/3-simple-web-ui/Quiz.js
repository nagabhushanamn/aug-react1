


function teach() {
    let tnrName = "Nag";  // will get move to heap
    try {
        console.log(tnrName + ' teaching .js');
        //throw new Error('hate .js');
        setTimeout(function () {
            console.log(tnrName + ' teaching react.js');
            //throw new Error('hate react.js');
            console.log('teaching react.js ends');
        }, 5000);
        console.log('teaching .js ends');
    } catch (e) {
        console.log('caught - ' + e.message);
    }
}
teach();