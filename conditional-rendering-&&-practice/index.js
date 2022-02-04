//  App component
const App = () => {
  const [messages, setMessages] = React.useState(["a", "b"]);
  return (
    <main>
      {messages.length === 0 ? (
        <h3>You're all caught up</h3>
      ) : (
        <h3>
          You have {messages.length} unread
          {messages.length > 1 ? " messages" : " message"}{" "}
        </h3>
      )}
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
