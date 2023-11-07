import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bannerimg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Spare Victuals </h1>
        <p> SHARE, NOURISH, CARE TOGETHER</p>
        <Link to="/menu">
          <button> DONATE NOW </button>
        </Link>
       
      </div>
    
    </div>
    </div>
    
  );
}

export default Home;