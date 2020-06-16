import React from "react";
import Heading from "./Compnents/Heading";

import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./Compnents/TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
    </div>
  );
};

export default App;
