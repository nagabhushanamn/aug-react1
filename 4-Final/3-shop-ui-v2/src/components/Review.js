import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Review extends Component {
    render() {
        let { review } = this.props;
        return (
            <div className="row">
                <div className="col-8 col-sm-8 col-md-8">
                    <div className="alert alert-info">
                        <span className="badge badge-dark">
                            {review.stars}
                        </span>
                        &mdash; {review.author}
                        <hr/>
                        <div>{review.body}</div>
                    </div>
                </div>
            </div>
        );
    }
}

Review.propTypes = {
    review: PropTypes.object
};

export default Review;