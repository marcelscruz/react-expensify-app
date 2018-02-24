import { createStore } from 'redux';

// Action gerenarators - functions that return action objects

// destructuring functions params
// const add = ({a, b}, c) => {
//   return a + b + c;
// };
// console.log(add({a: 2, b: 4}, 5));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ setCount }) => ({
  type: 'SET',
  setCount
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions - output is determined by the input;
      // it won't change values of outside variables
// 2. Never change state or action (in this example)

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
         count: 0
      };
    case 'SET':
      return {
        count: action.setCount
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ setCount: 101 }));
