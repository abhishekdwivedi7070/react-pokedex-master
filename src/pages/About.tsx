import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/about.jpg";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Abhishek Dwivedi</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created for entertainment.
      </h4>
      <div className="profile-links">
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaYoutube />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
