const jokeData = [
  {
    id: 1,
    setup: "I got my daughter a fridge for her birthday.",
    punchline: "I can't wait to see her face light up when she opens it.",
  },
  {
    id: 2,
    setup: "How did the hacker escape the police?",
    punchline: "He just ransomware!",
  },
  {
    id: 3,
    setup: "Why don't pirates travel on mountain roads?",
    punchline: "Scurvy.",
  },
  {
    id: 4,
    setup: "Why do bees stay in the hive in the winter?",
    punchline: "Swarm.",
  },
  {
    id: 5,
    setup: "What's the best thing about Switzerland?",
    punchline: "I don't know, but the flag is a big plus!",
  },
];

// Joke Component

const Joke = ({ setup, punchline }) => {
  const [isShow, setIsShown] = React.useState(false);

  const toggle = () => {
    setIsShown((prevState) => !prevState);
  };
  return (
    <div className="joke-container">
      {setup && <h3>{setup}</h3>}
      {isShow && <p>{punchline}</p>}
      <button onClick={toggle}>{isShow ? "Hide" : "Show"} Punchline</button>
      <hr />
    </div>
  );
};

//  App component (parent)

const App = () => {
  return (
    <main>
      {jokeData.map((joke) => {
        return <Joke key={joke.id} {...joke} />;
      })}
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
