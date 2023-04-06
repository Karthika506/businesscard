import React from "react";
import image from "../image/Karthika.jpg";
import About from "./About";
import Interests from "./Interests";

export default function Info() {
  return (
    <div>
      <img src={image} className="image" />
      <div className="header">
        <h1 className="h1">Karthika</h1>
        <h3 className="h3">Frontend Developer</h3>
        <h5>karthika.website</h5>
        <div className="buttons">
          <button type="submit" className="button1">
            Email
          </button>
          <button type="submit" className="button2">
            LinkedIn
          </button>
        </div>
        <About />
        <Interests />
      </div>
    </div>
  );
}
