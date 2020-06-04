import React from "react";
import { Link } from "react-router-dom";
import "./Title.css";

function Title() {
  return (
    <div className="title">
      <Link to="/">
        <h1>COTI</h1>
      </Link>
      <button className="login-btn">Login</button>
    </div>
  );
}

export default Title;
