console.log('-index.js-');
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

// constants
//--------------------------------------------
const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const LOAD_REVIEWS = "LOAD_REVIEWS";
const ADD_NEW_REVIEW = "ADD_NEW_REVIEW";
const BUY = "BUY";
// ....

// action creator(s)
//--------------------------------------------


function loadProducts() {
    return function (dispatch) {
        let api = "http://localhost:8080/api/products";
        // dispatch action saying Request begin
        let promise = fetch(api)
        promise
            .then(response => response.json())
            .then(products => {
                // dispatch action saying Request success
                dispatch({ type: LOAD_PRODUCTS, products }); // action
            }, () => {
                // dispatch action saying Request failed
            })
    }
}
function addNewReview(productId, review) {
    //..
    return { type: ADD_NEW_REVIEW, productId, review };
}
function loadReviews(productId) {
    //...
    let reviews = [
        { stars: 5, author: 'nag@email.com', body: 'bla bla' },
        { stars: 5, author: 'nag@email.com', body: 'bla bla' },
    ]
    return { type: LOAD_REVIEWS, productId, reviews }
}

function buy(item, qty) {
    //..
    return { type: BUY, item, qty }
}


//--------------------------------------------

// reducer(s)
function productsReducer(state = [], action) {
    console.log('productsReducer()');
    switch (action.type) {
        case LOAD_PRODUCTS:
            return [...state, ...action.products];
        default:
            return state;
    }
}
function reviewsReducer(state = {}, action) {
    console.log('reviewsReducer()');
    switch (action.type) {
        case ADD_NEW_REVIEW: {
            let productId = action.productId;
            let review = action.review;
            let reviews = state[productId] || [];
            reviews = reviews.concat(review);
            return Object.assign({}, state, { [productId]: reviews })
        }
        case LOAD_REVIEWS: {
            let productId = action.productId;
            let reviews = action.reviews;
            let existingReviews = state[productId] || [];
            reviews = [...existingReviews, ...reviews];
            return Object.assign({}, state, { [productId]: reviews })
        }
        default:
            return state;
    }
}
function cartReducer(state = {}, action) {
    switch (action.type) {
        case BUY: {
            let cart = state;
            let line;
            let item = action.item;
            let id = item.id;
            let qty = action.qty;
            if (!cart[id]) {
                line = {
                    [id]: { item, qty }
                }
            } else {
                line = cart[id];
                line = Object.assign({}, line, { qty: line.qty + qty })
                line = { [id]: line }
            }
            return Object.assign({}, cart, line)
        }
        default:
            return state;

    }
}

//--------------------------------------------
// root reducer
const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
});
//--------------------------------------------
const initialState = {
    products: [
        { id: 0, name: 'test-product', price: 0.0, description: 'dummy' }
    ],
    reviews: {
        111: [
            { stars: 1, author: 'who@email.com', body: 'sample review' }
        ]
    },
    cart: {}
};

// store
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
//--------------------------------------------

// View

//--------------------------------------------
// ProductList View
//--------------------------------------------
store.subscribe(() => {
    console.log('ListView');
    let state = store.getState().products;
    console.log(state);
});

//--------------------------------------------
// Product View
//--------------------------------------------
store.subscribe(() => {
    console.log('ProductView');
    let state = store.getState().reviews;
    console.log(state);
});
//--------------------------------------------


document.getElementById('loadProductsBtn')
    .addEventListener('click', e => {
        let action = loadProducts();
        store.dispatch(action);
    })


document.getElementById('loadRevBtnLap')
    .addEventListener('click', e => {
        let action = loadReviews(111)
        store.dispatch(action);
    })

document.getElementById('newRevBtnLap')
    .addEventListener('click', e => {
        let action = addNewReview(111, { stars: 5, author: 'nag@email.com', body: 'bla bla' })
        store.dispatch(action);
    })

document.getElementById('newRevBtnMob')
    .addEventListener('click', e => {
        let action = addNewReview(222, { stars: 5, author: 'nag@email.com', body: 'bla bla' })
        store.dispatch(action);
    })

document.getElementById('buyLap')
    .addEventListener('click', e => {
        let action = buy({ id: 111, name: 'Laptop', price: 3000 }, 1);
        store.dispatch(action);
    })

document.getElementById('buyMob')
    .addEventListener('click', e => {
        let action = buy({ id: 222, name: 'Mobile', price: 3000 }, 1);
        store.dispatch(action);
    })


