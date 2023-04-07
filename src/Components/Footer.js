import React from "react";
import twitter from "../image/twitter.png";
import facebook from "../image/facebook.png";
import insta from "../image/insta1.jpg";
import github from "../image/githun.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={twitter} />
      <img src={facebook} />
      <img src={insta} />
      <img src={github} />
    </div>
  );
}
