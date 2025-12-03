import CounterButton from "./counter-button/CounterButton";
import { useState } from "react";
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementParentFunction(by) {
    setCount(count + by);
  }

  function decrementParentFunction(by) {
    setCount(count - by);
  }

  return (
    <div>
      <span className="totalCount">{count}</span>
      <CounterButton by={1} incrementParentFunction={incrementParentFunction} decrementParentFunction={decrementParentFunction}></CounterButton>
      <CounterButton by={2} incrementParentFunction={incrementParentFunction} decrementParentFunction={decrementParentFunction}></CounterButton>
      <CounterButton by={5} incrementParentFunction={incrementParentFunction} decrementParentFunction={decrementParentFunction}></CounterButton>
    </div>
  );
}