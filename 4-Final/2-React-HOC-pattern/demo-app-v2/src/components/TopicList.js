
import React, { Component } from 'react';

import { connect,applyRWD } from '../hoc'

class TopicList extends Component {
    render() {
        let { data: topics } = this.props;
        let { onTopicSelect } = this.props;
        let topicElements = topics.map((topic, idx) => <div onClick={() => { onTopicSelect(topic) }} key={idx} className="list-group-item">{topic}</div>);
        return (
            <div className="col-md-6 col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-heading">All Topics</div>
                    <div className="panel-body">
                        <div className="list-group">
                            {topicElements}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

// export default TopicList;
export default connect(TopicList, function(s, props){
    return s.getTopics();
});