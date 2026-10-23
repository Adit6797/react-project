import React, { useEffect, useState } from "react";
import "../navbarStyle/Orders.css";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

   
    setOrders(savedOrders.reverse());

  }, []);

  return (

    <div className="orders-page">

      <h1>My Orders</h1>

      {orders.length === 0 ? (

        <div className="empty-orders">

          <h2>No Previous Orders 📦</h2>

          <p>Your purchased products will appear here.</p>

        </div>

      ) : (

        orders.map((order) => (

          <div
            className="order-card"
            key={order.id}
          >

            <div className="order-header">

              <h3>Order #{order.id}</h3>

              <p>{order.date}</p>

            </div>

            {order.items.map((product) => (

              <div
                className="order-item"
                key={product.id}
              >

                <img
                  src={product.thumbnail}
                  alt={product.title}
                />

                <div>

                  <h4>{product.title}</h4>

                  <p>Quantity : {product.quantity}</p>

                  <p>
                    ₹
                    {(product.price * 100).toFixed(2)}
                  </p>

                </div>

                <h4>
                  ₹
                  {(
                    product.price *
                    100 *
                    product.quantity
                  ).toFixed(2)}
                </h4>

              </div>

            ))}

            <div className="order-footer">

              <h3>
                Total :
                ₹{order.total.toFixed(2)}
              </h3>

            </div>

          </div>

        ))

      )}

    </div>

  );
}

export default Orders;