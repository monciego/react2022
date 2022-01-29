import React from "react";
import "./form.css";
import { memeData } from "../../memesData";

const Form = () => {
  const random = () => {
    const data = memeData.data.memes;

    const rand = Math.floor(Math.random(data) * data.length);
    const url = data[rand].url;

    console.log(url);
  };

  return (
    <div>
      <form>
        <div className="input-group">
          <input type="text" name="upperText" placeholder="Top Text" />
          <input type="text" name="bottomText" placeholder="Bottom Text" />
        </div>
        <button type="button" onClick={random} className="btn">
          Get a new meme image 🖼️
        </button>
      </form>
    </div>
  );
};

export default Form;
