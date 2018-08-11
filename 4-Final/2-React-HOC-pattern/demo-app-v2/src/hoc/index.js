import React, { Component } from 'react';
import Store from '../store/Store';


function connect(WrappedComponent, callback) {
    class Container extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: callback(Store, props)
            }
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
                data: callback(Store, this.props)
            });
        }
        render() {
            return <WrappedComponent data={this.state.data} />
        }
    }

    function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }
    Container.displayName = `Connect<${getDisplayName(WrappedComponent)}>`;

    return Container;
}
export { connect }






function applyRWD(WrappedComponent) {
    class Container extends Component {
        render() {
            return (
                <div>
                    <WrappedComponent />
                </div>
            )
        }
    }
    return Container;
}

export { applyRWD };