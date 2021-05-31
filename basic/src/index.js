import ReactDOM from 'react-dom';
import './App.css';
import { createStore } from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const App = () => {
  return (
    <main>
      <h1>Counter1: {store.getState()}</h1>
      <br />
      <br />
      <button
        onClick={() => {
          store.dispatch({ type: 'INCREMENT' });
        }}
      >
        Increase Count
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          store.dispatch({ type: 'DECREMENT' });
        }}
      >
        Decrease Count
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          store.dispatch({ type: 'RESET' });
        }}
      >
        Reset Count
      </button>
    </main>
  );
};

const App2 = () => {
  return (
    <main>
      <h1>Counter2: {store.getState()}</h1>
      <br />
      <br />
      <button
        onClick={() => {
          store.dispatch({ type: 'INCREMENT' });
        }}
      >
        Increase Count
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          store.dispatch({ type: 'DECREMENT' });
        }}
      >
        Decrease Count
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          store.dispatch({ type: 'RESET' });
        }}
      >
        Reset Count
      </button>
    </main>
  );
};

const renderApp = () => {
  ReactDOM.render(
    <>
      <App />
      <App2 />
    </>,
    document.getElementById('root')
  );
};

renderApp();
store.subscribe(renderApp);
