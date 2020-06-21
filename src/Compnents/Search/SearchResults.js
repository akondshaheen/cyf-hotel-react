import React, { useState } from "react";
import SearchButton from "./SearchButton";
import SearchResultsRow from "./SearchResultsRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [customerId, setCustomerId] = useState(null);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
            <th scope="col">Nights</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, index) => {
            return (
              <SearchResultsRow
                rowData={row}
                key={index}
                setId={setCustomerId}
              />
            );
          })}
        </tbody>
      </table>
      <div>
        <CustomerProfile id={customerId} />
      </div>
    </div>
  );
};

export default SearchResults;
