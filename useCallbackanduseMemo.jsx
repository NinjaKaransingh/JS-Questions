import { useState, useCallback, useMemo } from "react";

function Example({ items }) {
  const [count, setCount] = useState(0);

  const total = useMemo(() => {
    return items.reduce((a, b) => a + b);
  }, [items]);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>
        <p>total : {total}</p>
        <button onClick={increment}>Clicked {count} times</button>
      </div>
    </>
  );
}
