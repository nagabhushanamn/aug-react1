import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { connect } from 'react-redux';

import { loadProducts } from './actions/products';
import store from './store';

class App extends Component {
  renderProducts() {
    let { products } = this.props;
    return products.map((product, idx) => {
      return <Product product={product} key={idx} />
    })
  }
  render() {
    let { cart } = this.props;
    let itemsCount = Object.keys(cart).length;
    return (
      <div className="container">
        <Router>
          <div>
            <nav className="navbar navbar-light bg-primary">
              <Link to="/" className="navbar-brand">shopIT</Link>
            </nav>
            <hr />
            <i className="fa fa-shopping-cart"></i> {itemsCount} item(s) in cart
            &nbsp;|&nbsp;
            <Link to="products">view-products</Link>
            &nbsp;|&nbsp;
            <Link to="cart">view-cart</Link>
            <hr />
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/products"} render={() => this.renderProducts()} />
            <Route path={"/cart"} render={() => <ViewCart cart={cart} />} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart
  };
}

export default connect(mapStateToProps, null)(App);
