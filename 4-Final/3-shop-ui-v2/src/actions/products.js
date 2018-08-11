
import { LOAD_PRODUCTS } from '../constants';

export function loadProducts() {
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