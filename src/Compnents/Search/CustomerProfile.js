import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [bookingProfile, SetBookingProfile] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => SetBookingProfile(data));
  }, [id]);
  return (
    <div>
      Customer Profile Details
      <p> {bookingProfile.id} </p>
      <p> {bookingProfile.email} </p>
      <p> {bookingProfile.vip ? "Yes" : "No"} </p>
      <p> {bookingProfile.phoneNumber}</p>
    </div>
  );
}

export default CustomerProfile;
