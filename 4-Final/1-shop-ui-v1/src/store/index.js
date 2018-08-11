

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension'


let middleware = [thunk];
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});


const initialState = {
    products: [],
    reviews: {},
    cart: {}
};

// store
export default createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
));
