import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import PropTypes from 'prop-types'
import Greeting from './Greeting';
import ActionButton from './ActionButton';
import TotalCountDisplay from './TotalCountDisplay';


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      message: 'greetings',
      totalCount: 100
    };
    console.log('App :: constructor()');
    //console.dir(props);
  }

  changeMessage(message) {
    this.setState({ message });
  }
  incrementTotalCount(value) {
    let { totalCount } = this.state;
    totalCount += value;
    this.setState({ totalCount })
  }

  render() {
    console.log('App :: render()');
    // let title = this.props.title;
    // let by = this.props.by;
    // or
    let { title, by } = this.props;
    let { totalCount,message } = this.state;
    return (
      <div className="container">

        <hr />
        <h1> {title} - by {by} </h1>
        <hr />

        <div className="card">
          <div className="card-header"> App component  : <span className="badge badge-dark">{totalCount}</span></div>
          <div className="card-body">

            {
              /* 
              <button onClick={this.changeMessage.bind(this, 'Hello World')}>HW</button>
              <button onClick={this.changeMessage.bind(this, "Good Morning")}>GM</button>
              <button onClick={this.changeMessage.bind(this, "Good Noon")}>GN</button>
              <button onClick={this.changeMessage.bind(this, "Good Evening")}>GE</button> 
              */
            }

            <button onClick={(e) => { this.changeMessage('hello world') }}>HW</button>
            <button onClick={(e) => { this.changeMessage('good morning') }}>GM</button>
            <button onClick={(e) => { this.changeMessage('good noon') }}>GN</button>
            <button onClick={(e) => { this.changeMessage('good evening') }}>GE</button>
            <button onClick={(e) => { this.changeMessage('') }}>Remove</button>

            <hr />

            {message ? <Greeting message={this.state.message} /> : null}

            <hr />

            {
              /* 
              <ActionButton value="10" onAction={e => { this.incrementTotalCount(e) }} />
              <ActionButton value="-10" onAction={e => { this.incrementTotalCount(e) }} /> 
              */
            }

            {
              
              [10,-10]
              .map((n,idx)=><ActionButton key={idx} value={n} onAction={e => { this.incrementTotalCount(e) }} /> )
              
            }


            <div style={{ clear: 'both' }}>
              <hr />
              <TotalCountDisplay value={totalCount} />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  by: PropTypes.string
};

export default App;
