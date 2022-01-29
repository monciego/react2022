const App = () => {
  const [isImportant, setIsImportant] = React.useState("Yes");

  const handleClick = () => {
    setIsImportant("No");
  };

  return (
    <div className="container">
      <h1>Is state important to know?</h1>
      <div onClick={handleClick} className="state-value">
        <h2>{isImportant}</h2>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
