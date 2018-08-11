import React, { Component } from 'react';
import PropTypes from 'prop-types'
/* 
class TotalCountDisplay extends Component {
    render() {
        let { value } = this.props;
        return (
            <div className="alert alert-danger">
                Total count : <span className="badge badge-dark">{value}</span>
            </div>
        );
    }
}
TotalCountDisplay.propTypes={
    value:PropTypes.number
}
export default TotalCountDisplay; */

// or

export default ({ value }) => {
    return (
        <div className="alert alert-danger">
            Total count : <span className="badge badge-dark">{value}</span>
        </div>
    );
}