//Initial State
const initialState = {
    currentValue: 0
};

//Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//Action Creators
export function increment(amount){
    console.log(amount)
    return {amount, type: INCREMENT};
};

export function decrement(amount){
    return {amount, type: DECREMENT};
};

//Reducer Function
export default function counter(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return {currentValue: state.currentValue + action.amount};
        case DECREMENT:
            return {currentValue: state.currentValue - action.amount};
        default:
            return state;
    }
};

