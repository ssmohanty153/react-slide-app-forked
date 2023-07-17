import { useState, useStet } from "react";

export default function useCountHooks(initialState = 0) {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return [count, increment, decrement];
}
