
import {BUY} from '../constants'

export function cartReducer(state = {}, action) {
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