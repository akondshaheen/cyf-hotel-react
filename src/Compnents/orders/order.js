import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = prop => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    return setOrders(orders + 1);
  }
  return (
    <div>
      <li>
        {prop.orderType}: {orders}
        <RestaurantButton orderOne={orderOne} />
      </li>
    </div>
  );
};

export default Order;
