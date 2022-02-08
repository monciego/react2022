const Form = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employement: "",
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
      <fieldset>
        <legend>Current employement status</legend>
        <input
          type="radio"
          id="unemployed"
          name="employement"
          value="unemployed"
          checked={formData.unemployement === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employement"
          value="part-time"
          checked={formData.unemployement === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employement"
          value="full-time"
          checked={formData.unemployement === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
    </form>
  );
};

ReactDOM.render(<Form />, document.getElementById("root"));
