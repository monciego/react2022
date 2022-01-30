const App = () => {
  const [isGoingOut, setIsGoingOut] = React.useState(false);

  const handleClick = () => {
    setIsGoingOut((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Do I feel like going out tonight?</h1>
      <div onClick={handleClick} className="state-value">
        <h2>{isGoingOut ? "Yes" : "No"}</h2>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
