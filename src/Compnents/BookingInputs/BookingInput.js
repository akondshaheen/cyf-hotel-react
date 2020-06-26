import React, { useState } from "react";
import "../../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

function BookingInput(props) {
  const [bookingInput, setBookingInput] = useState({
    firstName: "",
    surname: "",
    title: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const handleChange = event => {
    const updatedUserData = {
      ...bookingInput,
      [event.target.name]: event.target.value
    };

    setBookingInput(updatedUserData);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.newBooking(bookingInput);
  };

  return (
    <div>
      <h1>Input Booking</h1>
      <form className="inputForm">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={bookingInput.title}
          placeholder="Title"
        />
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="FirstName"
          name="firstName"
          onChange={handleChange}
          value={bookingInput.firstName}
          placeholder="First Name"
        />
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          id="surname"
          name="surname"
          onChange={handleChange}
          value={bookingInput.surname}
          placeholder="Last Name"
        />

        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={bookingInput.email}
          placeholder="email"
        />
        <label htmlFor="roomId">Room Id</label>
        <input
          type="text"
          id="roomId"
          name="roomId"
          onChange={handleChange}
          value={bookingInput.roomId}
          placeholder="Room Id"
        />
        <label htmlFor="CheckinDate">Checkin Date</label>
        <input
          type="text"
          id="checkinDate"
          name="checkinDate"
          onChange={handleChange}
          value={bookingInput.checkinDate}
          placeholder="Checkin"
        />
        <label htmlFor="CheckOutDate">Check Out Date</label>
        <input
          type="text"
          id="checkOutDate"
          name="checkOutDate"
          onChange={handleChange}
          value={bookingInput.checkOutDate}
          placeholder="Check Out"
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingInput;
