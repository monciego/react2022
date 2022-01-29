import React from "react";
import "./form.css";

const Form = () => {
  return (
    <form action="">
      <div className="input-group">
        <input type="text" name="upperText" placeholder="Top Text" />
        <input type="text" name="bottomText" placeholder="Bottom Text" />
      </div>
      <button type="button" className="btn">
        Get a new meme image 🖼️
      </button>
    </form>
  );
};

export default Form;
