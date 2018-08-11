import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GrandChild extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                GrandChild-component
                <hr />
                {this.context.money}
            </div>
        );
    }
}
GrandChild.contextTypes = {
    money: PropTypes.number
};

export default GrandChild;