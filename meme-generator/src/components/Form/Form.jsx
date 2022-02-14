import React, { useState } from "react";
import "./form.css";
import { memesData } from "../../memesData";

const Form = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  const handleChange = (e) => {
    setMeme((prevMeme) => {
      return { ...prevMeme, [e.target.name]: e.target.value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(meme);
  }

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <div className="meme-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
            placeholder="Top Text"
          />
          <input
            type="text"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
            placeholder="Bottom Text"
          />
        </div>
        <button type="button" onClick={getMemeImage} className="btn">
          Get a new meme image 🖼️
        </button>
      </form>
      <figure className="meme">
        <img src={meme.randomImage} alt="Meme" className="meme-img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </figure>
    </div>
  );
};

export default Form;
