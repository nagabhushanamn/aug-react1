import React, { Component } from 'react';
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 1,
      products: [
        {
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          name: 'Mobile',
          price: 47000,
          description: 'New iphone 7',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    };
  }
  changeTab(tab) {
    this.setState({ tab })
  }
  renderBuyBtn(product) {
    if (product.canBuy)
      return (<button className="btn btn-primary btn-sm">buy</button>)
    else return null;
  }
  renderTabPanel(product) {
    let { tab } = this.state;
    let panel;
    switch (tab) {
      case 1:
        panel = (<div>{product.description}</div>)
        break;
      case 2:
        panel = (<div>Note Yet</div>)
        break;
      case 3:
        panel = (<div>None Yet</div>)
        break;
      default:
        panel = null;
    }
    return panel;
  }
  renderProducts() {
    let { products, tab } = this.state;
    return products.map((product, idx) => {
      return (
        <div className="list-group-item" key={idx}>
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={product.image} className="img-fluid" alt="product" />
            </div>
            <div className="col-9 col-sm-39 col-md-9">
              <h4>{product.name}</h4>
              <h5>&#8377;{product.price}</h5>
              {this.renderBuyBtn(product)}
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={classNames('nav-link', { 'active': tab === 1 })} onClick={e => this.changeTab(1)}>Description</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { 'active': tab === 2 })} onClick={e => this.changeTab(2)}>Specification</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { 'active': tab === 3 })} onClick={e => this.changeTab(3)}>Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      );
    })
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand">shopIT</a>
        </nav>
        <hr />
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
