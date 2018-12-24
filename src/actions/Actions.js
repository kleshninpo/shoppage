export function plusTotalItems(totalItems) {
    return {
        type: 'PLUS_TOTAL_ITEMS',
        payload: ++totalItems,
    }
}
export function minusTotalItems(totalItems) {
    return {
        type: 'MINUS_TOTAL_ITEMS',
        payload: totalItems > 0 ? --totalItems : totalItems,
    }
}
export function changeTotalPrice(totalPrice) {
    return {
        type: 'CHANGE_TOTAL_PRICE',
        payload: totalPrice
    }
}