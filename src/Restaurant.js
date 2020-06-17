import React, { useState } from "react";
import RestaurantButton from "./Compnents/orders/RestaurantButton";
import Order from "./Compnents/orders/order";
const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate cakes" />
      </ul>
    </div>
  );
};

export default Restaurant;
