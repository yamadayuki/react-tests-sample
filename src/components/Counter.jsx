import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
