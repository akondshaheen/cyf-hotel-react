import React, { useState, useEffect } from "react";
import Search from "./Compnents/Search/Search.js";
import SearchResults from "./Compnents/Search/SearchResults";
import "./style.css";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const Url = "https://cyf-react.glitch.me";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch(Url)
      .then(results => results.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(error => setError(error.message));
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

  if (error.length != 0) {
    return <h1 className="error">{error}</h1>;
  } else if (loading) {
    return <h1 className="loading">Loading...</h1>;
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    );
  }

  // return (
  //   <div>
  //     {loading ? (
  //       <span>Loading...</span>
  //     ) : (
  //       <div className="App-content">
  //         <div className="container">
  //           <Search search={search} />
  //           <SearchResults results={bookings} />
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Bookings;
