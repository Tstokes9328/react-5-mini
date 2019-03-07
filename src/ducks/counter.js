//Initial State
const initialState = {
    currentValue: 0
};

//Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//Action Creators
export function increment(amount){
    return {amount, type: INCREMENT};
};

export function decrement(amount){
    return {amount, type: DECREMENT};
};

//Reducer Function
export default function counter(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return Object.assign({}, state.currentValue += action.amount);
        case DECREMENT:
            return Object.assign({}, state.currentValue -= action.amount);
        default:
            return state;
    }
};

