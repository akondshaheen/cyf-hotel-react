import React from "react";
import Heading from "./Compnents/Heading";

import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./Compnents/TouristInfo/TouristInfoCards";
import Footer from "./Compnents/Footer";
import Restaurant from "./Restaurant";

function App() {
  const footerElement = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer footerEl={footerElement} />
    </div>
  );
}

export default App;
