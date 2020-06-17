import React, { useState } from "react";

const RestaurantButton = prop => {
  return (
    <div>
      <button onClick={prop.orderOne} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
