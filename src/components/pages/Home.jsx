import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="card-container">
        <div className="card">
          <h3>Card 1</h3>
          <p>This is card 1 description</p>
          <Link to="/card1" className="card-link">
            Go to Card 1
          </Link>
        </div>
        <div className="card">
          <h3>Card 2</h3>
          <p>This is card 2 description</p>
          <Link to="/card2" className="card-link">
            Go to Card 2
          </Link>
        </div>
        <div className="card">
          <h3>Card 3</h3>
          <p>This is card 3 description</p>
          <Link to="/card3" className="card-link">
            Go to Card 3
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
