import React, { Component } from 'react';
import Comment from './Comment';

import { connect } from '../hoc'

class CommentList extends Component {
    render() {
        let { data: comments } = this.props;
        let commentComps = comments.map((comment, idx) => <Comment key={idx} comment={comment} />);
        return (
            <div className="list-group col-md-6 col-sm-6">
                {commentComps}
            </div>
        );
    }
}

export default connect(CommentList, (Store, props) => {
    return Store.getComments();
}); 