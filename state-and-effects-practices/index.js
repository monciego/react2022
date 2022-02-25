const App = () => {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

  const [show, setShow] = React.useState(true);

  const toggleHandler = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="container">
      <button onClick={toggleHandler}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
      {/* <WindowTracker show={show} /> */}
    </div>
  );
};

const WindowTracker = ({ show }) => {
  /**
   * Challenge:
   * 1. Create state called `windowWidth`, default to
   *    `window.innerWidth`
   * 2. When the window width changes, update the state
   * 3. Display the window width in the h1 so it updates
   *    every time it changes
   */
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const watchWidth = () => {
      console.log("Setting up");
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", watchWidth);
    // cleanup
    return () => {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return (
    <h1>Window width: {windowWidth}</h1>
    // <div>{show && <h1>Window width: {windowWidth}</h1>}</div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
