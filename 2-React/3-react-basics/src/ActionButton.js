import React, { Component } from 'react';
import './ActionButton.css';
import PropTypes from 'prop-types';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log('ActionButton :: constructor()');
    }
    handleBtnClick() {
        let { count } = this.state;
        let { onAction, value } = this.props;
        count++;
        this.setState({ count });
        let v = value * count;
        onAction(v);
    }
    render() {
        console.log('ActionButton :: render()');
        let { value } = this.props;
        let { count } = this.state;
        let className=`btn ${value>0?'btn-success':'btn-danger'}`;
        return (
            <div className="action-button">
                <div className="card">
                    <div className="card-body">
                        <button onClick={e => { this.handleBtnClick() }} className={className}>{value}</button>
                        &nbsp;
                        <span className="badge badge-dark">{count}</span>
                    </div>
                </div>
            </div>
        );
    }
}
ActionButton.propTypes = {
    value: PropTypes.number,
    onAction: PropTypes.func
};

export default ActionButton;