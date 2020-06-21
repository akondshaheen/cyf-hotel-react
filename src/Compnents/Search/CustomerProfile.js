import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [bookingProfile, SetBookingProfile] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => SetBookingProfile(data));
  }, [id]);
  return (
    <ul>
      Customer Profile Details
      <li> Booking ID: {bookingProfile.id} </li>
      <li> Email: {bookingProfile.email} </li>
      <li> VIP: {bookingProfile.vip ? "Yes" : "No"} </li>
      <li> Mob No: {bookingProfile.phoneNumber}</li>
    </ul>
  );
}

export default CustomerProfile;
