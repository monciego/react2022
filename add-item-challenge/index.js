const App = () => {
  // const thingsArray = ["Thing 1", "Thing 2"];
  const [things, setThings] = React.useState(["Thing 1"]);

  const thingElements = things.map((thing) => <p key={thing}>{thing}</p>);

  const addItem = () => {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
    /* thingsArray.push(newThingText);
    console.log(thingsArray); */
  };

  return (
    <div className="container">
      <button onClick={addItem}>Click me</button>
      {/* insert things here... */}
      {thingElements}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
