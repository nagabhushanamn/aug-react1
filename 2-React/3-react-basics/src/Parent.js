import React, { Component } from 'react';
import Child from './Child';
import PropTypes from 'prop-types'


class Parent extends Component {
    getChildContext() {
        return { money: 1000 };
    }
    render() {
        return (
            <div className="alert alert-info">
                Parent-component
                <Child/>
            </div>
        );
    }
}

Parent.childContextTypes = {
    money: PropTypes.number
};

export default Parent;