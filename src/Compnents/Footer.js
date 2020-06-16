import React from "react";

const Footer = props => {
  return (
    <ul className="footer">
      {props.footerEl.map((el, index) => {
        return <li key={index}>{el}</li>;
      })}
    </ul>
  );
};

export default Footer;
