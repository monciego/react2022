import React, { useState, useEffect } from "react";
import "./form.css";

const Form = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setALlMemes] = React.useState([]);

  /**
  useEffect takes a function as its parameter. If that function
  returns something, it needs to be a cleanup function. Otherwise,
  it should return nothing. If we make it an async function, it
  automatically retuns a promise instead of a function or nothing.
  Therefore, if you want to use async operations inside of useEffect,
  you need to define the function separately inside of the callback
  function, as seen below:
*/
  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setALlMemes(data.data.memes);
    }
    getMemes();
  }, []);

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
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
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
