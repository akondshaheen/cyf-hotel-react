import React, { useState } from "react";
import moment from "moment";
import "../../../src/App.css";

const CustomerList = props => {
  const checkIn = moment(props.customer.checkInDate);
  const checkOut = moment(props.customer.checkOutDate);

  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <tr onClick={handleSelect} className={selected && "selected"}>
      <th scope="row">{props.customer.id}</th>
      <td>{props.customer.title}</td>
      <td>{props.customer.firstName}</td>
      <td>{props.customer.surname}</td>
      <td>{props.customer.email}</td>
      <td>{props.customer.roomId}</td>
      <td>{props.customer.checkInDate}</td>
      <td>{props.customer.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
    </tr>
  );
};

export default CustomerList;
