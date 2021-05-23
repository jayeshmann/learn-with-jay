import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Counter: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      <br />
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
};

export default App;
