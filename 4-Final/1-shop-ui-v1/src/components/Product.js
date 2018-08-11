import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm';

import { loadReviews, addNewReview } from '../actions/reviews';
import { buy } from '../actions/cart';
import store from '../store'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 1,
            reviews: []
        }
    }
    componentDidMount() {
        let { product } = this.props;
        store.subscribe(() => {
            let state = store.getState();
            let allReviews = state.reviews;
            let reviews = allReviews[product.id] || [];
            this.setState({ reviews });
        });
    }
    addNewReview(review) {
        let { product } = this.props;
        let { id } = product;
        store.dispatch(addNewReview(id, review))
    }
    changeTab(tab) {
        this.setState({ tab }, () => {
            if (tab === 3) {
                let { product } = this.props;
                let { id } = product;
                store.dispatch(loadReviews(id));
            }
        })
    }
    handleBuy() {
        let {product } = this.props;
        store.dispatch(buy(product, 1))
    }
    renderBuyBtn(product) {
        if (true)
            return (<button onClick={e => this.handleBuy()} className="btn btn-primary btn-sm">buy</button>)
        else return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review review={review} key={idx} />
        });
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
                panel = (
                    <div>
                        {this.renderReviews()}
                        <hr />
                        <ReviewForm onSubmit={review => this.addNewReview(review)} />
                    </div>
                )
                break;
            default:
                panel = null;
        }
        return panel;
    }
    render() {
        let { product } = this.props;
        let { tab } = this.state;
        return (
            <div>
                <div className="list-group-item">
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
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object
};

export default Product;