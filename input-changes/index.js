const Form = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
      />
    </form>
  );
};

ReactDOM.render(<Form />, document.getElementById("root"));
