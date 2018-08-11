import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCartOpen: false,
      cart: {},
      products: [
        {
          id: 111,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          id: 222,
          name: 'Mobile',
          price: 47000,
          description: 'New iphone 7',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    };
  }
  toggleCart() {
    let { isCartOpen } = this.state;
    isCartOpen = !isCartOpen;
    this.setState({ isCartOpen });
  }
  addToCart(item, qty) {
    let id = item.id;
    let { cart } = this.state;
    let line;
    if (!cart[id]) {
      line = {
        [id]: { item, qty }
      }
    } else {
      line = cart[id];
      line = Object.assign({}, line, { qty: line.qty + qty })
      line = { [id]: line }
    }
    cart = Object.assign({}, cart, line)
    this.setState({ cart })
  }
  renderProducts() {
    let { products, cart, isCartOpen } = this.state;
    if (!isCartOpen) {
      return products.map((product, idx) => {
        return <Product onBuy={(item, qty) => this.addToCart(item, qty)} product={product} key={idx} />
      })
    } else {
      return <ViewCart cart={cart} />
    }
  }
  render() {
    let { cart, isCartOpen } = this.state;
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
