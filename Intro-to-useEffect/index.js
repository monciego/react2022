const App = () => {
  const [data, setData] = React.useState({});

  console.log("Component rendered");

  // side effects
  React.useEffect(
    () => {
      fetch("https://swapi.dev/api/people/1").then((res) => res.json());
      //  .then((data) => setData(data)); // this will cause infinite loop
    }
    //need second parameter here...
  );

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
