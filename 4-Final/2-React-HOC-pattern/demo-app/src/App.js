import React, { Component } from 'react';
import TopicList from './components/TopicList'
import CommentList from './components/CommentList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">React - HOC - pattern</div>

        <TopicList onTopicSelect={(topic) => { alert(topic) }} />
        <CommentList />

      </div>
    );
  }
}

export default App;
