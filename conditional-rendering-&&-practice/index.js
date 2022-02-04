//  App component
const App = () => {
  const [messages, setMessages] = React.useState(["a", "b"]);
  return (
    <main>
      {messages.length > 0 && (
        <h1>You have {messages.length} unread messages!</h1>
      )}
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
