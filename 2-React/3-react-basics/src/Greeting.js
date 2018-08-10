import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverMessage: '',
            timeNow: new Date().toLocaleTimeString()
        };
        console.log('Greeting::constructor()');
    }
    render() {
        console.log('Greeting::render()');
        let { message } = this.props
        let { serverMessage, timeNow } = this.state;
        return (
            <div className="alert alert-info">
                <span className="badge badge-primary">
                    {message}
                </span>
                <hr />
                {serverMessage} - {timeNow}
            </div>
        );
    }
    componentDidMount() {
        console.log('Greeting::componentDidMount()');
        // n/w request...
        setTimeout(() => {
            //let serverMessage = "Hello from server-side";
            //this.setState({ serverMessage });
        }, 2000);

        this.interval = setInterval(() => {
            let timeNow = new Date().toLocaleTimeString();
            this.setState({ timeNow })
        }, 500);

    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting::shouldComponentUpdate()');
        //if (this.props.message !== nextProps.message) return true
        //else return false;
        return true;
    }
    componentDidUpdate() {
        console.log('Greeting::componentDidUpdate()');
    }
    componentWillUnmount() {
        console.log('Greeting::componentWillUnmount()');
        clearInterval(this.interval)
    }
}
Greeting.propTypes = {
    message: PropTypes.string
};
export default Greeting;