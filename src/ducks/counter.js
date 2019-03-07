//Initial State
const initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
};

//Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const REDO = 'REDO';
const UNDO = 'UNDO';

//Action Creators
export function increment(amount){
    console.log(amount)
    return {amount, type: INCREMENT};
};

export function decrement(amount){
    return {amount, type: DECREMENT};
};

export function redo(){
    return {type: REDO};
};

export function undo(){
    return {type: UNDO};
};

//Reducer Function
export default function counter(state = initialState, action) {
    switch (action.type) {
      case INCREMENT:
        return {
          currentValue: state.currentValue + action.amount,
          futureValues: [],
          previousValues: [state.currentValue, ...state.previousValues]
        };
      case DECREMENT:
        return {
          currentValue: state.currentValue - action.amount,
          futureValues: [],
          previousValues: [state.currentValue, ...state.previousValues]
        };
      case UNDO:
        return {
          currentValue: state.previousValues[0],
          futureValues: [state.currentValue, ...state.futureValues],
          previousValues: state.previousValues.slice(1)
        };
      case REDO:
        return {
          currentValue: state.futureValues[0],
          futureValues: state.futureValues.slice(1),
          previousValues: [state.currentValue, ...state.previousValues]
        };
      default:
        return state;
    }
  }

