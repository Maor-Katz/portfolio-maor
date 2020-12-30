const initialState = {
    myList: [],
};

export const addToBasket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            var needToPush = true;
            const chosenSize = {chosenSize: action.chosenSize};
            const shirtToPush = Object.assign({}, action.newShirt, chosenSize);
            // action.newShirt['chosenSize'] = action.chosenSize //adding chosen size property to shirt object
            state.myList.map(item => {
                if (`${shirtToPush['chosenSize']}${shirtToPush['id']}` === `${item['chosenSize']}${item['id']}`) {//checking in current shirt if we want to add another shirt exactly the same
                    if (item['quantity']) {
                        item['quantity']++;
                    }//checking if this is the second exactly same shirt or maybe 3 or 4
                    else {
                        item['quantity'] = 2;
                    }
                    needToPush = false;
                }
            })
            let newState = Object.assign({}, state);
            if (needToPush) {
                newState.myList.push(shirtToPush);
            }
            return newState;
        case 'DELETE_SHIRT':
            let afterDelete = Object.assign({}, state, {
                myList: state.myList.filter((shirt, index) => {
                    return index !== action.newShirt
                })
            })
            return afterDelete;
        case 'DELETE_LIST':
            let emptyList = Object.assign({}, state, {
                myList: []
            })
            return emptyList;
            default:
            return state;
    }
}