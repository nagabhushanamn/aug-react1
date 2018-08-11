
import { ADD_NEW_REVIEW, LOAD_REVIEWS } from '../constants'

export function reviewsReducer(state = {}, action) {
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
            reviews = [...reviews];
            return Object.assign({}, state, { [productId]: reviews })
        }
        default:
            return state;
    }
}