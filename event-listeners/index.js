const App = () => {
  const handleClick = () => {
    console.log("I was clicked!");
  };

  return (
    <div className="container">
      <figure>
        <img
          onMouseOver={() => {
            console.log("I was hovered!");
          }}
          src="https://images.pexels.com/photos/9940867/pexels-photo-9940867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="A Woman in Black Sweater and Leather Pants Sitting on the Floor"
        />
      </figure>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
