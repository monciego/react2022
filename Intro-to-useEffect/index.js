const App = () => {
  const [data, setData] = React.useState({});
  const [count, setCount] = React.useState(1);

  // side effects
  React.useEffect(() => {
    // first parameter - function, second parameter - dependencies array
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [count]);

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get Next Character
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
