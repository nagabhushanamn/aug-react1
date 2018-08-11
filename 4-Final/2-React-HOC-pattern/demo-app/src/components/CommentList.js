import React, { Component } from 'react';
import Comment from './Comment';

import Store from '../store/Store'

class CommentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // "DataSource" is some global data source
            comments: Store.getComments()
        };
    }
    componentDidMount() {
        // Subscribe to changes
        Store.subscribe(this.handleChange);
    }
    componentWillUnmount() {
        // Clean up listener
        Store.unSubscribe(this.handleChange);
    }
    handleChange() {
        // Update component state whenever the data source changes
        this.setState({
            comments: Store.getComments()
        });
    }


    render() {
        let comments = this.state.comments.map((comment, idx) => <Comment key={idx} comment={comment} />);
        return (
            <div className="list-group col-md-6 col-sm-6">
                {comments}
            </div>
        );
    }
}

export default CommentList; 