import React from "react";
import "../navbarStyle/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-tag">WELCOME TO ADIXA ECOMMERCE STORE</p>

          <h1>
            Your Everyday Shopping,
            <br />
            Made Simple.
          </h1>

          <p>
            Adixa Super Market brings quality products,
            great prices, and a convenient shopping
            experience right to your fingertips.
          </p>

          <button className="about-shop-btn">
            <Link to="/home">
            Start Shopping
            </Link>
          </button>
        </div>
      </section>


      {/* Our Story */}
      <section className="story-section">

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=80"
            alt="Supermarket"
          />
        </div>

        <div className="story-content">

          <p className="section-tag">
            OUR STORY
          </p>

          <h2>
            More Than Just a
            <br />
            Supermarket
          </h2>

          <p>
            At Adixa Super Market, we believe shopping
            should be simple, affordable, and enjoyable.
            We bring together everyday essentials,
            groceries, personal care products, electronics,
            and much more in one convenient place.
          </p>

          <p>
            Our goal is to provide customers with
            high-quality products at competitive prices
            while creating a smooth and reliable shopping
            experience.
          </p>

          <div className="story-points">

            <div>
              <span>✓</span>
              Quality Products
            </div>

            <div>
              <span>✓</span>
              Affordable Prices
            </div>

            <div>
              <span>✓</span>
              Easy Shopping
            </div>

            <div>
              <span>✓</span>
              Customer First
            </div>

          </div>

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="why-section">

        <div className="section-heading">

          <p className="section-tag">
            WHY ADIXA?
          </p>

          <h2>
            Everything You Need,
            <br />
            All in One Place
          </h2>

          <p>
            We make everyday shopping easier by
            providing a wide range of products and
            a convenient online experience.
          </p>

        </div>


        <div className="features">

          <div className="feature-card">

            <div className="feature-icon">
              🛒
            </div>

            <h3>
              Wide Selection
            </h3>

            <p>
              Explore groceries, household essentials,
              beauty products, electronics and more.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              💰
            </div>

            <h3>
              Best Prices
            </h3>

            <p>
              Get great products at competitive prices
              with exciting offers and discounts.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🚚
            </div>

            <h3>
              Easy Shopping
            </h3>

            <p>
              Browse products, add them to your cart
              and enjoy a simple shopping experience.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ❤️
            </div>

            <h3>
              Customer First
            </h3>

            <p>
              Your satisfaction is our priority.
              We always put our customers first.
            </p>

          </div>

        </div>

      </section>


      {/* Stats */}
      <section className="stats-section">

        <div className="stat">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat">
          <h2>5K+</h2>
          <p>Products</p>
        </div>

        <div className="stat">
          <h2>50+</h2>
          <p>Categories</p>
        </div>

        <div className="stat">
          <h2>24/7</h2>
          <p>Online Shopping</p>
        </div>

      </section>


      {/* Mission */}
      <section className="mission-section">

        <div className="mission-content">

          <p className="section-tag">
            OUR MISSION
          </p>

          <h2>
            Making Shopping
            <br />
            Better Every Day.
          </h2>

          <p>
            Our mission is to make everyday shopping
            faster, easier, and more accessible for
            everyone. We continuously work to improve
            our products, service, and technology so
            our customers can shop with confidence.
          </p>

          <button className="mission-btn">
            <Link to="/home">
            Explore Products
            </Link>
          </button>

        </div>

      </section>

    </div>
  );
}

export default About;