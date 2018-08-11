
import React, { Component } from 'react';
import Store from '../store/Store'

class TopicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: Store.getTopics()
        };
    }
    componentDidMount() {
        // Subscribe to changes
        Store.subscribe(this.handleChange);
    } 
    componentWillUnmount() {
        Store.unSubscribe(this.handleChange);
    }
    handleChange() {
        // Update component state whenever the Stote's state change
        this.setState({
            comments: Store.getComments()
        });
    }

    render() {
        let { topics } = this.state;
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

export default TopicList;