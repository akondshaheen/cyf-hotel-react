import React from "react";

const CustomerList = props => {
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
    </tr>
  );
};

export default CustomerList;
