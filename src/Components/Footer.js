import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        🌿 Med Leaf © {new Date().getFullYear()} | Powered by AI, Inspired by
        Nature.
      </p>
      <p>Deep learning transforming pixels into plant-based healthcare.</p>
    </footer>
  );
};

export default Footer;
