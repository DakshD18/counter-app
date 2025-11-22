import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  const handleIncrementby5 = () => setCount(count + 5);
  const handleDecrementby5 = () => setCount(count - 5);

  return (
    <div className="app-container">
      <h1>Counter App</h1>

      <div className="count-display">{count}</div>

      <div className="button-row">
        <button onClick = {handleDecrement}> -1 </button>
        <button onClick = {handleReset}> Reset </button>
        <button onClick = {handleIncrement}> +1 </button>
        <button onClick = {handleIncrementby5}> +5 </button>
        <button onClick = {handleDecrementby5}> -5 </button>
      </div>
    </div>
  );
}

export default App;
