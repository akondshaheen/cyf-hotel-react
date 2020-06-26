import React, { useState } from "react";
import moment from "moment";
import "../../../src/App.css";

const SearchResultsRow = ({ rowData, setId }) => {
  // const checkIn = moment(rowData.checkInDate);
  // const checkOut = moment(rowData.checkOutDate);

  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  const onClickHandle = () => {
    return setId(rowData.id);
  };

  return (
    <tbody>
      <tr onClick={handleSelect} className={selected ? "selected" : null}>
        <th scope="row">{rowData.id}</th>
        <td>{rowData.title}</td>
        <td>{rowData.firstName}</td>
        <td>{rowData.surname}</td>
        <td>{rowData.email}</td>
        <td>{rowData.roomId}</td>
        <td>{rowData.checkInDate}</td>
        <td>{rowData.checkOutDate}</td>
        {/* <td>{checkOut.diff(checkIn, "days")}</td> */}
        <td>
          <button className="btn btn-primary" onClick={onClickHandle}>
            Show Profile
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SearchResultsRow;
