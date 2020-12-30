const initialState = {
    paymentOpen :false
};

export const openOrClosePayment = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_CLOSE_PAYMENT':
            var newState = Object.assign({}, state, {paymentOpen : action.paymentOpen});
            return newState
        default:
            return state;
    }
}