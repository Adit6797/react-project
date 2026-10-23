import React, { useEffect, useState } from "react";
import axios from "axios";
import "../navbarStyle/Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : {};
  });

  async function getProducts() {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products"
      );

      setProducts(response.data.products);
    } catch (error) {
      console.log("Product fetching error:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((previousCart) => ({
      ...previousCart,

      [product.id]: {
        ...product,
        quantity: 1,
      },
    }));
  }

  function increaseQuantity(id) {
    setCart((previousCart) => ({
      ...previousCart,

      [id]: {
        ...previousCart[id],
        quantity: previousCart[id].quantity + 1,
      },
    }));
  }

  function decreaseQuantity(id) {
    setCart((previousCart) => {
      const newCart = { ...previousCart };

      if (newCart[id].quantity === 1) {
        delete newCart[id];
      } else {
        newCart[id] = {
          ...newCart[id],
          quantity: newCart[id].quantity - 1,
        };
      }

      return newCart;
    });
  }

  return (
    <div className="home">

      {/* Hero Section */}

      <div className="hero">

        <div className="hero-content">

          <p className="hero-small">
            NEW COLLECTION 2026
          </p>

          <h1>
            Adixa Super Market !!
            <br />
            Discover Products
          </h1>

          <p className="hero-description">
            Shop our latest collection with amazing deals
            and premium products.
          </p>

          <button className="shop-btn">
            Shop Now
          </button>

        </div>

      </div>


     

      <section className="products-section">

        <div className="section-heading">

          <div>

            <p className="small-heading">
              OUR PRODUCTS
            </p>

            <h2>Featured Products</h2>

          </div>

          <p className="product-count">
            {products.length} Products
          </p>

        </div>


        <div className="product-container">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="image-container">

                <img
                  src={product.thumbnail}
                  alt={product.title}
                />

                <span className="discount">
                  -{Math.round(product.discountPercentage)}%
                </span>

              </div>


              <div className="product-details">

                <p className="category">
                  {product.category}
                </p>

                <h3>
                  {product.title}
                </h3>


                <div className="rating">

                  <span className="star">
                    ★
                  </span>

                  <span>
                    {product.rating}
                  </span>

                  <span className="reviews">
                    ({product.reviews?.length || 0} reviews)
                  </span>

                </div>


                <div className="price-container">

                  <span className="price">
                    ₹{(product.price * 100).toFixed(2)}
                  </span>

                  <span className="old-price">
                    ₹
                    {(
                      (product.price * 100) /
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>

                </div>


                {/* Cart Buttons */}

                {!cart[product.id] ? (

                  <button
                    className="add-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>

                ) : (

                  <div className="quantity-box">

                    <button
                      onClick={() =>
                        decreaseQuantity(product.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {cart[product.id].quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(product.id)
                      }
                    >
                      +
                    </button>

                  </div>

                )}

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;