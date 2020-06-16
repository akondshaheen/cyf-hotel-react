import React from "react";
import Logo from "./Logo.css";

function Heading() {
  return (
    <div>
      <header className="App-header">
        CYF Hotel
        <img
          alt="Logo"
          className="logo"
          src="https://media-cdn.tripadvisor.com/media/photo-s/0f/ad/ae/b5/grand-bayoin-siem-reap.jpg"
        />
      </header>
    </div>
  );
}

export default Heading;
