import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { loadProducts } from './actions/products';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: {},
      products: [] 
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      console.log('App - subscribed...');
      let state = store.getState();
      let products = state.products;
      let cart = state.cart;
      this.setState({ products, cart });
    });
    store.dispatch(loadProducts())
  }
  renderProducts() {
    let { products, cart, isCartOpen } = this.state;
    if (!isCartOpen) {
      return products.map((product, idx) => {
        return <Product product={product} key={idx} />
      })
    } else {
      return <ViewCart cart={cart} />
    }
  }
  render() {
    let { cart } = this.state;
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

export default App;
