import React, { useState } from "react";

export function HiddenLabel() {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <button onClick={() => setHidden(!hidden)} data-testid="button">
        toggle
      </button>
      {hidden ? null : <p data-testid="text">Hidden label</p>}
    </div>
  );
}
