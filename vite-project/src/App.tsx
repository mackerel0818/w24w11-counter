import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const plusOne = (prev: number) => prev + 1;

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(plusOne);
          setCount(plusOne);
          setCount(plusOne);
          setCount(plusOne);
          setCount(plusOne);
        }}
      >
        증가
      </button>
    </>
  );
}
