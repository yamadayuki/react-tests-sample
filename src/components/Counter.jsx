import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div data-testid="counter">
      <h2>Counter</h2>
      <p data-testid="text">count: {count}</p>
      <button onClick={() => setCount(count + 1)} data-testid="button">
        +
      </button>
    </div>
  );
}
