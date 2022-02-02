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

const App = ({ darkMode }) => {
  const [boxes, setBoxes] = React.useState(boxesData);
  const styles = {
    backgroundColor: darkMode ? "#222222" : "#cccccc",
  };
  return (
    <main>
      {boxes.map((data) => (
        <div key={data.id} className="box" style={styles}></div>
      ))}
    </main>
  );
};

ReactDOM.render(<App darkMode={true} />, document.getElementById("root"));
