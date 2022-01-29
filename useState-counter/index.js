const App = () => {
  const [count, setCount] = React.useState(0);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <button onClick={decrement} className="decrement">
        -
      </button>
      <div className="counter-count">
        <h1>{count}</h1>
      </div>
      <button onClick={increment} className="increment">
        +
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
