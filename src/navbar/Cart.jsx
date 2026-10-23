import React, { useEffect, useState } from "react";
import "../navbarStyle/Cart.css";

function Cart() {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : {};

  });



  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);


  function increaseQuantity(id) {

    setCart((previousCart) => ({

      ...previousCart,

      [id]: {
        ...previousCart[id],
        quantity:
          previousCart[id].quantity + 1,
      },

    }));

  }


  function decreaseQuantity(id) {

    setCart((previousCart) => {

      const newCart = {
        ...previousCart
      };

      if (newCart[id].quantity === 1) {

        delete newCart[id];

      } else {

        newCart[id] = {

          ...newCart[id],

          quantity:
            newCart[id].quantity - 1,

        };

      }

      return newCart;

    });

  }


  function removeProduct(id) {

    setCart((previousCart) => {

      const newCart = {
        ...previousCart
      };

      delete newCart[id];

      return newCart;

    });

  }


  const cartProducts =
    Object.values(cart);


  const totalPrice =
    cartProducts.reduce(
      (total, product) => {

        return (
          total +
          product.price *
          100 *
          product.quantity
        );

      },
      0
    );


  function handlePayment() {

    if (cartProducts.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const previousOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cartProducts,
      total: totalPrice,
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...previousOrders, newOrder])
    );

    alert(
      `Payment of ₹${totalPrice.toFixed(2)} successful!`
    );


    setCart({});
  
  }



  return (

    <div className="cart-page">

      <h1>Shopping Cart</h1>


      {cartProducts.length === 0 ? (

        <div className="empty-cart">

          <h2>
            Your cart is empty 🛒
          </h2>

          <p>
            Add some products from the Home page.
          </p>

        </div>

      ) : (

        <>

          <div className="cart-container">

            {cartProducts.map((product) => (

              <div
                className="cart-item"
                key={product.id}
              >

                <img
                  src={product.thumbnail}
                  alt={product.title}
                />


                <div className="cart-details">

                  <h3>
                    {product.title}
                  </h3>

                  <p>
                    ₹
                    {(product.price * 100)
                      .toFixed(2)}
                  </p>


                  <div className="cart-quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(
                          product.id
                        )
                      }
                    >
                      −
                    </button>

                    <span>
                      {product.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(
                          product.id
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                </div>


                <div className="item-total">

                  <p>
                    ₹
                    {(
                      product.price *
                      100 *
                      product.quantity
                    ).toFixed(2)}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeProduct(
                        product.id
                      )
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>


          <div className="cart-summary">

            <h2>
              Order Summary
            </h2>

            <div className="summary-row">

              <span>
                Total Items
              </span>

              <span>
                {cartProducts.reduce(
                  (total, product) =>
                    total +
                    product.quantity,
                  0
                )}
              </span>

            </div>


            <div className="summary-row total">

              <span>
                Total Amount
              </span>

              <span>
                ₹{totalPrice.toFixed(2)}
              </span>

            </div>


            <button
              className="pay-btn"
              onClick={handlePayment}
            >
              Pay Now
            </button>

          </div>

        </>

      )}

    </div>

  );
}

export default Cart;