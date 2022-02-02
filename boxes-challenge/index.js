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

  const toggle = (id) => {
    // console.log(id);
    setBoxes((prevBox) => {
      const newBox = [];
      for (let i = 0; i < prevBox.length; i++) {
        const currentBox = prevBox[i];
        if (currentBox.id === id) {
          const updatedSquare = {
            ...currentBox,
            on: !currentBox.on,
          };
          newBox.push(updatedSquare);
        } else {
          newBox.push(currentBox);
        }
      }
      return newBox;
    });
  };

  return (
    <main>
      {boxes.map((data) => (
        <Box key={data.id} id={data.id} on={data.on} toggle={toggle} />
      ))}
    </main>
  );
};

// Box component
const Box = ({ on, toggle, id }) => {
  const styles = {
    backgroundColor: on ? "#222" : "transparent",
  };

  return <div className="box" onClick={() => toggle(id)} style={styles}></div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
