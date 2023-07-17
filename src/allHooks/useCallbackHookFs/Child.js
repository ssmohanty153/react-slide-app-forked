import React, { memo } from "react";

function Child({ count, learning }) {
  console.log("child component");
  return <div>Total value</div>;
}
export default memo(Child);
