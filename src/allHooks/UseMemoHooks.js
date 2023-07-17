import React, { useMemo, useState } from "react";

export default function UseMemoHooks() {
  const [num, setNum] = useState(0);
  const [sub, setSub] = useState(100);
  const add = () => {
    setNum(num + 1);
  };
  const subNum = () => {
    setSub(sub - 1);
  };

  const multi = useMemo(() => {
    console.log("sakjskjnjksanjk");
    return num * 10;
  }, [num]);
  return (
    <div>
      {multi}
      <br />
      <button onClick={add}>Add</button>
      <br />
      <p>{num}</p>
      <button onClick={subNum}>Substrict</button>
      <p>{sub}</p>
      <br />
    </div>
  );
}
