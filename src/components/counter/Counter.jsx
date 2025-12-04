import CounterButton from "./counter-button/CounterButton";
import { useState } from "react";
import './Counter.css';
import ResetButton from "./reset-button/ResetButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementFunction(by) {
    setCount(count + by);
  }

  function decrementFunction(by) {
    setCount(count - by);
  }

  function resetFunction() {
    setCount(0);
  }

  return (
    <div>
      <span className="totalCount">{count}</span>
      <CounterButton by={1} incrementFunction={incrementFunction} decrementFunction={decrementFunction}></CounterButton>
      <CounterButton by={2} incrementFunction={incrementFunction} decrementFunction={decrementFunction}></CounterButton>
      <CounterButton by={5} incrementFunction={incrementFunction} decrementFunction={decrementFunction}></CounterButton>
      <ResetButton resetFunction={resetFunction}></ResetButton>
    </div>
  );
}