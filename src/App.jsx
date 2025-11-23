import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);   // <-- NEW state

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  const handleIncrementBy5 = () => setCount(count + 5);
  const handleDecrementBy5 = () => setCount(count - 5);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);   // switch mode
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
      <h1>Counter App</h1>

      <div
        className="count-display"
        style={{
          color: count > 0 ? "green" : count < 0 ? "red" : "black",
        }}
      >
        {count}
      </div>

      <div className="button-row">
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleIncrementBy5}>+5</button>
        <button onClick={handleDecrementBy5}>-5</button>
      </div>

      {/* Theme toggle button */}
      <button className="theme-toggle" onClick={handleModeToggle}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
