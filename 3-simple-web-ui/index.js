console.log('-index.js-');

//---------------------------------------------------------------
// using DOM api
//---------------------------------------------------------------

let alertBox = document.querySelector('.alert');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');
let greetBtn = document.querySelector('.btn-success');

showBtn.addEventListener('click', e => {
    alertBox.style.display = ''
});
hideBtn.addEventListener('click', e => {
    alertBox.style.display = 'none'
});
greetBtn.addEventListener('click', e => {
    alertBox.innerText = "good morning"
});

//---------------------------------------------------------------
// Timer API
//---------------------------------------------------------------

let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let imgEle = document.querySelector('img');

startBtn.addEventListener('click', e => {
    let idx = 0;
    let interval = setInterval(() => {
        idx++;
        let src = `images/${idx}.jpeg`;
        imgEle.src = src;
        if (idx === 5) idx = 0
    }, 1000);

    stopBtn.addEventListener('click', e => {
        clearInterval(interval);
    })
})


//---------------------------------------------------------------
// XHR/Fetch API
//---------------------------------------------------------------

let todosBtn = document.querySelector('#todosBtn');
todosBtn.addEventListener('click', e => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(todos => {
            document.querySelector('.jumbotron').innerText = JSON.stringify(todos)
        })
});