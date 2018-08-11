
import React, { Component } from 'react';

import { buy } from '../actions/cart';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ViewCart extends Component {
    renderCartItems() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        return keys.map((key, idx) => {
            let line = cart[key];
            let item = line.item;
            let qty = line.qty;
            return (
                <tr key={idx}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td> <i className="fa fa-minus" onClick={()=>this.props.actions.buy(item,-1)}></i> {qty}  <i className="fa fa-plus" onClick={()=>this.props.actions.buy(item,1)}></i></td>
                    <td>&#8377;{item.price*qty}</td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header bg-warning">Items in cart</div>
                    <div className="card-body">
                        <table className="table table-bordered table-sm">
                            <thead></thead>
                            <tbody>
                                {this.renderCartItems()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ buy }, dispatch)
    };
}

export default connect(null,mapDispatchToProps)(ViewCart);