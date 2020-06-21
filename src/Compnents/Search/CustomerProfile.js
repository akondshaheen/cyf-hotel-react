import React, { useState, useEffect } from "react";
import "../../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomerProfile({ id }) {
  const [bookingProfile, SetBookingProfile] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => SetBookingProfile(data));
  }, [id]);
  return (
    <div class="list-group" className="CustomerProfile">
      <h1 href="#" class="list-group-item list-group-item-action active">
        Customer Profile Details
      </h1>
      <h1 href="#" class="list-group-item list-group-item-action">
        Customer Id : {bookingProfile.id}
      </h1>
      <h1 href="#" class="list-group-item list-group-item-action">
        Customer Email: {bookingProfile.email}
      </h1>
      <h1 href="#" class="list-group-item list-group-item-action">
        Vip : {bookingProfile.vip ? "Yes" : "No"}{" "}
      </h1>
      <h1 href="#" class="list-group-item list-group-item-action disabled">
        Customer Mo. : {bookingProfile.phoneNumber}
      </h1>
    </div>
  );
}

export default CustomerProfile;
