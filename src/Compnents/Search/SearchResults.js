import React, { useState } from "react";
import SearchButton from "./SearchButton";
import CustomerList from "./SearchResultsRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [id, setId] = useState(null);

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
            return <CustomerList data={row} key={index} setId={setId} />;
          })}
        </tbody>
      </table>
      <div>
        <CustomerProfile id={id} />
      </div>
    </div>
  );
};

export default SearchResults;
