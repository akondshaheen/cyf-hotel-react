import React from "react";
import moment from "moment";

const CustomerList = props => {
  const checkIn = moment(props.customer.checkInDate);
  const checkOut = moment(props.customer.checkOutDate);

  return (
    <tr>
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
