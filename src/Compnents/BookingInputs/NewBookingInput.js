import React from "react";

const NewBookingInput = props => {
  const data = props.data;

  if (!data) {
    return null;
  } else {
    return (
      <tbody>
        <tr>
          <td>{data.title}</td>
          <td>{data.firstName}</td>
          <td>{data.surname}</td>
          <td>{data.email}</td>
          <td>{data.roomId}</td>
          <td>{data.checkInDate}</td>
          <td>{data.checkOutDate}</td>
        </tr>
      </tbody>
    );
  }
};

export default NewBookingInput;
