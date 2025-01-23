import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="full-height">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <div className="button-container">
        <Link to="/data">
          <button className="nav-button">Go to Data Fetcher</button>
        </Link>
        <Link to="/form">
          <button className="nav-button">Go to Form</button>
        </Link>
        <Link to="/map">
          <button className="nav-button">Go to Map</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
