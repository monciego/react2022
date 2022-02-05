const Form = () => {
  const [firstName, setFirstName] = React.useState("");
  const [latName, setLastName] = React.useState("");

  const handleChange = (e) => {
    setFirstName(e.target.value);
    console.log(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="First Name" onChange={handleChange} />
      <input type="text" placeholder="Last Name" onChange={handleLastName} />
    </form>
  );
};

ReactDOM.render(<Form />, document.getElementById("root"));
