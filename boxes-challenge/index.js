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
        <div key={data.id} className="box"></div>
      ))}
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
