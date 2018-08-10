
console.log('-index.js-');

// step-1 : component class
/*
    <div class="alert alert-info">
        <span class="badge badge-dark">Hello World!</span>
    </div>
*/

// way-1 : pure-js

/* class Greeting extends React.Component {
    render() {
        let spanEle = React.createElement('span', { class: 'badge badge-dark' }, "hello world!");
        let divEle = React.createElement('div', { class: 'alert alert-info' }, spanEle);
        return divEle;
    }
} */
// or
//way-2 : jsx
class Greeting extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                <span className="badge badge-dark">Hello World!</span>
            </div>
        );
    }
}
// step-2 : instantiate component class
// let helloWorlGreeting = React.createElement(Greeting, null, null);
// or
let helloWorlGreeting=<Greeting />

ReactDOM.render(helloWorlGreeting, document.getElementById('root'));