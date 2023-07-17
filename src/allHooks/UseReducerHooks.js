/**
 * useReducer is taking two arguments(reducer, initialState);
 *
 * reducer is a function which is taking two arguments (state, action)
 * ie:-reducer = (state, action)
 *
 *useReducer hook returning an array where [count, dispatch];
 * dispatch action want to perform and count the value
 *
 */

import React, { useReducer } from "react";

let initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
export default function UseReducerHooks() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {count}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")} disabled={count === 0}>
        Decrement
      </button>
    </div>
  );
}
