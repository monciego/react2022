// Parent component
const App = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          className="card--image"
        />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handeClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

// Child component
const Star = ({ isFilled, handeClick }) => {
  const starIcon = isFilled ? "star-filled.png" : "star-empty.png";

  return (
    <img
      src={`./images/${starIcon}`}
      className="card--favorite"
      onClick={handeClick}
    />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
