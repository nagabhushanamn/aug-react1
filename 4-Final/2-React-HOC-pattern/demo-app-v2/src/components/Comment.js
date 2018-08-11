import React, { Component } from 'react';

class Comment extends Component {
    render() {
        let { author, body } = this.props.comment;
        return (
            <div className="list-group-item">
                <div className="alert alert-info">
                    <span className="badge">{author}</span><hr />
                    <p>{body}</p>
                </div>
            </div>    
        );
    }
}

export default Comment;