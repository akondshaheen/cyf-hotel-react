import React, { useState, useEffect } from "react";
import Search from "./Compnents/Search/Search.js";
import SearchResults from "./Compnents/Search/SearchResults";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const Url = "https://cyf-react.glitch.me";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(Url)
      .then(results => results.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(error => alert(error.message));
  }, []);

  const search = searchVal => {
    console.log(bookings);
    setBookings(
      bookings.filter(
        event =>
          event.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          event.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className="App-content">
          <div className="container">
            <Search search={search} />
            <SearchResults results={bookings} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
