import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import "./Home.css";

function Home(props) {
  console.log(props.user);
  return (
    <div>
      <Title />
      <div className="login-section">
        <div className="introduction">
          <h2>HI!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis optio
            nesciunt reprehenderit perferendis accusantium earum distinctio est
            quam perspiciatis autem.
          </p>
        </div>
        <h2 className="whoareyou">WHO ARE YOU?</h2>
        {/* <Link to="/setup">
          <button onClick={props.chooseElder}>Elder</button>
        </Link>
        <Link to="/setup">
          <button onClick={props.chooseYoungster}>Youngster</button>
        </Link> */}
        <div className="users">
          <Link to="/setup" onClick={props.chooseYoungster}>
            <div className="avatar">
              <div className="avatar-img"></div>
              <p className="avatar-text">
                YOUNGSTER ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Link>
          <Link to="/setup" onClick={props.chooseElder}>
            <div className="avatar">
              <div className="avatar-img"></div>
              <p className="avatar-text">
                ELDER ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
