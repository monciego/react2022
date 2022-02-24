const App = () => {
  const [data, setData] = React.useState({});
  const [count, setCount] = React.useState(0);

  console.log("Component rendered");

  // side effects
  React.useEffect(() => {
    // first parameter - function, second parameter - dependencies array
    console.log("Effect function ran");
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
