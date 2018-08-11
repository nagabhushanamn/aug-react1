import React, { Component } from 'react';
import GrandChild from './GrandChild';

class Child extends Component {
    render() {
        return (
        <div className="alert alert-warning">
            Child-component
            <GrandChild/>
        </div>
        );
    }
}

export default Child;