import React from "react";

function Buttons() {
  return (
    <div className="btns">
      <Link to="/">
        <button>Return</button>
      </Link>
      <Link to="/setup/1">
        <button>Let's go!</button>
      </Link>
    </div>
  );
}

export default Buttons;
