import React, { useState } from "react";
import "./form.css";
import { memeData } from "../../memesData";

const Form = () => {
  const [memeImage, setMemeImage] = useState("");

  const random = () => {
    const data = memeData.data.memes;
    const rand = Math.floor(Math.random(data) * data.length);
    setMemeImage(data[rand].url);
  };

  return (
    <div className="meme-container">
      <form>
        <div className="input-group">
          <input type="text" name="upperText" placeholder="Top Text" />
          <input type="text" name="bottomText" placeholder="Bottom Text" />
        </div>
        <button type="button" onClick={random} className="btn">
          Get a new meme image 🖼️
        </button>
      </form>
      <figure>
        <img src={memeImage} alt="Meme" />
      </figure>
    </div>
  );
};

export default Form;
