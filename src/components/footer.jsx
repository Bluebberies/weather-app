import React from "react";

const Footer = ({ lightMode }) => {
  const setLight = () => {
    if (lightMode) {
      return "lightMode";
    }
  };

  return (
    <div className={`footer ${setLight()}`}>
      <div>
        Created with <span style={{ color: "red" }}>❤</span> by &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "hsl(228, 45%, 44%)" }}
          href="https://twitter.com/fran__cies"
        >
          Francis
        </a>
        .
      </div>
    </div>
  );
};

export default Footer;
