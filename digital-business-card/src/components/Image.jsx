import React from "react";
import myImage from "../images/profile-image.jpg";
const Image = () => {
  return (
    <figure className="my-image">
      <img src={myImage} alt="jericho's" />
    </figure>
  );
};

export default Image;
