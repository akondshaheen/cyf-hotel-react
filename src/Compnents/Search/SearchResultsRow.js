import React, { useState } from "react";
import moment from "moment";
import "../../../src/App.css";

const CustomerList = ({ data, setId }) => {
  const checkIn = moment(data.checkInDate);
  const checkOut = moment(data.checkOutDate);

  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  const onClickHandle = () => {
    return setId(data.id);
  };

  return (
    <tr onClick={handleSelect} className={selected ? "selected" : null}>
      <th scope="row">{data.id}</th>
      <td>{data.title}</td>
      <td>{data.firstName}</td>
      <td>{data.surname}</td>
      <td>{data.email}</td>
      <td>{data.roomId}</td>
      <td>{data.checkInDate}</td>
      <td>{data.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
      <td>
        <button onClick={onClickHandle}>Show Profile</button>
      </td>
    </tr>
  );
};

export default CustomerList;
