import { useState } from 'react';

const Hello = (props) => {
  console.log(props);

  if (props.age === undefined) {
    return (
      <div>
        <p>Hello {props.name}</p>
      </div>
    );
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Value of {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default App;
