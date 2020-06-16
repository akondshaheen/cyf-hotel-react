import React from "react";
import SearchButton from "./SearchButton";
import CustomerList from "./Search/CustomerData";

const SearchResults = props => {
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
          </tr>
        </thead>
        <tbody>
          {props.results.map((row, index) => {
            return <CustomerList key={index} customer={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
