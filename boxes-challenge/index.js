// data
const boxesData = [
  {
    id: 1,
    on: true,
  },
  {
    id: 2,
    on: false,
  },
  {
    id: 3,
    on: true,
  },
  {
    id: 4,
    on: true,
  },
  {
    id: 5,
    on: false,
  },
  {
    id: 6,
    on: false,
  },
];

// Parent component

const App = () => {
  const [boxes, setBoxes] = React.useState(boxesData);

  return (
    <main>
      {boxes.map((data) => (
        <Box key={data.id} on={data.on} />
      ))}
    </main>
  );
};

// Box component
const Box = ({ on }) => {
  const [onState, setOnState] = React.useState(on);

  const onFunction = () => {
    setOnState((prev) => !prev);
  };

  const styles = {
    backgroundColor: onState ? "#222" : "transparent",
  };

  return <div className="box" style={styles} onClick={onFunction}></div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
