import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-container">
      <div className="logo-container">
        <img src="src/images/bee.png"></img>
        <img src="src/images/hive_logo.png"></img>
        <img src="src/images/logo2.png"></img>
      </div>
      <div className="btn-container">
        <Link to="/play" id="btn-play-link">
          <button className="btn" id="btn-play">
            PLAY
          </button>
        </Link>
        <Link to="/rules" id="btn-rules-link">
          <button className="btn" id="btn-rules">
            RULES
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
