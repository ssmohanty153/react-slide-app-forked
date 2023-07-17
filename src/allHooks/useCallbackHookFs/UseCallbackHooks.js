import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function UseCallbackHooks() {
  const [inputValue, setInputValue] = useState("Subhransu");
  const [count, setCount] = useState(0);
  const [substract, setSubstract] = useState(100);

  const learning = useCallback(() => {}, []);
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(setInputValue(e.target.value))}
      ></input>
      <Child count={count} learning={learning} />
      <button onClick={() => setCount(count + 1)}>Add</button>

      <br />
      {count}
      <button onClick={() => setSubstract(substract - 1)}>Substract</button>
      <br />
      {substract}
    </div>
  );
}
