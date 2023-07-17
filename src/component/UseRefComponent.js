import React, { useRef, useState } from "react";

export default function UseRefComponent() {
  const refElememnt = useRef("");
  const [inputValue, setInputValue] = useState("subhransu");
  console.log(refElememnt);
  const reset = () => {
    setInputValue("");
    refElememnt.current.focus();
  };
  return (
    <div>
      <>
        <input
          type="text"
          ref={refElememnt}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <button onClick={reset}>Reset</button>
      </>
    </div>
  );
}
