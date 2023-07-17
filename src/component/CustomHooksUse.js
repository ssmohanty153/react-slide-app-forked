import React from "react";
import useCountHooks from "../hooks/useCountHooks";

export default function CustomHooksUse() {
  const [count, increment, decrement] = useCountHooks(100);
  return (
    <div>
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
