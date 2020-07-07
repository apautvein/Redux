const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

let count = 0;

function incrementor() {
    count++
}
store.subscribe(incrementor);

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);