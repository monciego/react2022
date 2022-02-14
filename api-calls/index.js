const App = () => {
  const [data, setData] = React.useState({});

  /*   console.log("Component rendered");

  fetch("https://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((data) => console.log(data)) */ return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
