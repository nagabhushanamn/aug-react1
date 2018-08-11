

import { ADD_NEW_REVIEW, LOAD_REVIEWS } from '../constants';

export function addNewReview(productId, review) {
    return function (dispatch) {
        let api = `http://localhost:8080/api/products/${productId}/reviews`;
        // dispatch action saying Request begin
        //..
        let promise = fetch(api, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(review) })
        promise
            .then(response => response.json())
            .then(review => {
                // dispatch action saying Request success
                dispatch({ type: ADD_NEW_REVIEW, productId, review }); // action
            }, () => {
                // dispatch action saying Request failed
            })
    }
}
export function loadReviews(productId) {
    return function (dispatch) {
        let api = `http://localhost:8080/api/products/${productId}/reviews`;
        // dispatch action saying Request begin
        //..
        let promise = fetch(api)
        promise
            .then(response => response.json())
            .then(reviews => {
                // dispatch action saying Request success
                dispatch({ type: LOAD_REVIEWS, productId, reviews }); // action
            }, () => {
                // dispatch action saying Request failed
            })
    }
}
