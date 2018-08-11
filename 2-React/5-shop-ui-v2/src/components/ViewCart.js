
import React, { Component } from 'react';

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
                    <td>{qty}</td>
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

export default ViewCart;