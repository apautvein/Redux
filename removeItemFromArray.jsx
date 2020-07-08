const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return state.filter((item, index) => index !== action.index)
        default:
            return state;
    }
};

const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        index
    }
}

const store = Redux.createStore(immutableReducer);