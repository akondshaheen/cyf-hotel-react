import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);

  const orderType = ["Salad", "Pizzas"];

  function orderOne() {
    return setOrders(count => count + 1);
  }
  return (
    <div>
      <li>
        {orderType[1]}: {orders}
      </li>
      <br />
      <li>
        {orderType[0]}: {orders}
      </li>
    </div>
  );
};

export default Order;
