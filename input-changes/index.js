const Form = () => {
  const [firstName, setFirstName] = React.useState("");

  console.log(firstName);
  const handleChange = (e) => {
    setFirstName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="First Name" onChange={handleChange} />
    </form>
  );
};

ReactDOM.render(<Form />, document.getElementById("root"));
