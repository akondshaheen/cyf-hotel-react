import React, { useState, useEffect } from "react";
import Search from "./Compnents/Search/Search.js";
import SearchResults from "./Compnents/Search/SearchResults";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [bookings, setBookings] = useState([]);
  const Url = "https://cyf-react.glitch.me";

  useEffect(() => {
    fetch(Url)
      .then(results => results.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
