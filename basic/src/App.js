import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Counter: {count}</h1>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      <br />
      <br />
      <button onClick={() => setCount(0)}>Reset Count</button>
    </main>
  );
};

export default App;
