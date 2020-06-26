import React, { useState } from "react";
import SearchButton from "./SearchButton";
import SearchResultsRow from "./SearchResultsRow";
import CustomerProfile from "./CustomerProfile";
import BookingInput from "../BookingInputs/BookingInput";
import NewBookingInput from "../BookingInputs/NewBookingInput";

import "../../App.css";
import TableHeader from "./TableHeader";

const SearchResults = ({ results }) => {
  const [newBooking, setNewBooking] = useState([]);

  const handleInputValue = newBooking => setNewBooking(newBooking);

  return (
    <div>
      <table className="table">
        <TableHeader />
        {results.map((row, index) => {
          return <SearchResultsRow rowData={row} key={index} />;
        })}
        <NewBookingInput data={newBooking} />
      </table>
      <BookingInput newBooking={handleInputValue} />
      {/* <CustomerProfile id={props.results.id} /> */}
    </div>
  );
};
export default SearchResults;
