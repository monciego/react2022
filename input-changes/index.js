const Form = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
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
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="text"
        placeholder="Email Address"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />
      <div>
        <input
          type="checkbox"
          id="isFriendly"
          onChange={handleChange}
          checked={formData.isFriendly}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
      </div>
    </form>
  );
};

ReactDOM.render(<Form />, document.getElementById("root"));
