const App = () => {
  const [data, setData] = React.useState({});
  const [count, setCount] = React.useState(0);

  console.log("Component rendered");

  /**
   * Challenge: re-write the useEffect
   * It should run any time `count` changes
   * For now, just console.log("Effect function ran")
   */

  // side effects
  React.useEffect(() => {
    // first parameter - function, second parameter - dependencies array
    console.log("Effect function ran");
    // fetch("https://swapi.dev/api/people/1").then((res) => res.json());
    // .then((data) => setData(data));
  }, [count]);

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
