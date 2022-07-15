import React from "react";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/items/cardbg.jpg"
          className="card-img"
          alt="bgImg"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
          <div className="container"></div>
          <h5 className="card-title display-3">Sale Incoming..</h5>
          <p className="card-text mb-3">
            Low on budget?? No Problem, Our new sale got you covered !
          </p>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
